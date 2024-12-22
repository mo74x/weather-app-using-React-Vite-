import { weathercodes } from "../code";

const Hours_temp = ({hoursweather}) => {
    const temp=Math.floor(hoursweather.temp_c);
          const time = hoursweather.time.split(" ")[1].substring(0,5);   
             const weathericon =Object.keys(weathercodes).find(icon => weathercodes[icon].includes(hoursweather.condition.code))
    return (
    <>
        <li className="weather-time">
                            <p className="time">{time}</p>
                            <img src={`icons/${weathericon}.svg`} className="weather-icon" />
                            <h2 className="temp-2">{temp}<span>°C</span> </h2>
                        </li>
    
        
    </>
    )
}
export default Hours_temp;