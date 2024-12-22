const Current_temp = ({currentWeather}) => {
    return (
        <>
           <div className="current" >
                    <img src={`icons/${currentWeather.weathericon}.svg`} className="weather-icon" />
                    <h2 className="temp">{currentWeather.tempreture} <span>°C</span> </h2>
                    <h2 className="weather-decs">{currentWeather.status}</h2>
                </div>
        </>
    )
}
export default Current_temp;