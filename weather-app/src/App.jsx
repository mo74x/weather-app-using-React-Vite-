import Search from "./components/Search"
import Current_temp from "./components/Current_temp"
import Hours_temp from "./components/Hours-temp"
import { useState } from "react";
import { weathercodes } from "./code";
function App() {
  const [currentWeather, setCurrentWeather] = useState({});
  const [hoursstream, setHoursStraem] = useState([]);
  const filterhours = (hourlydata) => {
    const currenthours = new Date().setMinutes(0, 0, 0);
    const nexthours = currenthours + 24 * 60 * 60 * 1000;
    const next24 = hourlydata.filter(({ time }) => {
      const forcasttime = new Date(time).getTime()
      return forcasttime >= currenthours && forcasttime <= nexthours
    });
    setHoursStraem(next24);
  }

  const getWeatherDetails = async (API_URL) => {
    try {
      const response = await fetch(API_URL)
      const data = await response.json();
      const tempreture = Math.floor(data.current.temp_c);
      const status = data.current.condition.text;
      const weathericon = Object.keys(weathercodes).find(icon => weathercodes[icon].includes(data.current.condition.code))
      setCurrentWeather({ tempreture, status, weathericon })

      const combinedhours = [...data.forecast.forecastday[0].hour, ...data.forecast.forecastday[1].hour]
      filterhours(combinedhours);
    } catch (error) {
      console.log(error)
    }
  };
  return (
    <>
      <div className="section">
        {/*search*/}
        <Search getWeatherDetails={getWeatherDetails}></Search>
        {/*weather*/}
        <div className="weather">
          <Current_temp currentWeather={currentWeather}></Current_temp>
          {/**hours-wather */}
          <div className="hours">
            <ul className="weather-list">
              {hoursstream.map(hoursweather => (
                <Hours_temp key={hoursweather.time_epoch} hoursweather={hoursweather}></Hours_temp>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}
export default App
