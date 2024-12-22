const Search = ({ getWeatherDetails }) => {
  const API_KEY = import.meta.env.VITE_API_KEY;
  const handlecity = (e) => {
    e.preventDefault();
    const searchinput = e.target.querySelector(".search-input");
    const API_URL = `http://api.weatherapi.com/v1/forecast.json?Key=${API_KEY}&q=${searchinput.value}&days=2`
    getWeatherDetails(API_URL);
  }

  const handlelocation = () => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;
        const API_URL = `http://api.weatherapi.com/v1/forecast.json?Key=${API_KEY}&q=${latitude},${longitude}&days=2`
        getWeatherDetails(API_URL);
      },
      () => alert("Access Denied.")
    )
  }
  return (
    <>
      <div className="search-con">
        <form action="#" className="search-form" onSubmit={handlecity}>
          <span className="material-symbols-rounded">search</span>
          <input type="search" className="search-input" required placeholder="Enter City Name" />
        </form>
        <button className="location-button" onClick={handlelocation}>
          <span className="material-symbols-rounded">location_on</span></button>
      </div>
    </>
  )
}
export default Search;