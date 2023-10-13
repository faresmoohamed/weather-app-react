import "./current-weather.css";

const CurrentWeather = ({ data }) => {
  return (
    <div className="weather">
      <div className="top">
        <div>
          <p className="city">{data.city}</p>
          <p className="weather-description">{data.weather[0].description}</p>
        </div>

      </div>
      <div className="bottom">
        <p className="temperature">{Math.round(data.main.temp)}°C</p>
        <img
          alt="weather"
          className="weather-icon"
          src={`icons/${data.weather[0].icon}.png`}
        />
      </div>
      

        <div className="details-section">
        <div className="details">
          <div className="parameter-row">
            {/* <span className="parameter-label">Feels like</span> */}
            <img className="detal-icon" src="icons/thermometer (1).png"/>
            <span className="parameter-value">{Math.round(data.main.feels_like)}°C</span>
          </div>
          <div className="parameter-row">
            {/* <span className="parameter-label">Wind</span> */}
            <img className="detal-icon" src="icons/wind.png" />
            <span className="parameter-value">{data.wind.speed} m/s</span>
          </div>
          <div className="parameter-row">
            {/* <span className="parameter-label">Humidity</span> */}
            <img className="detal-icon" src="icons/humidity.png" />
            <span className="parameter-value">{data.main.humidity}%</span>
          </div>
          <div className="parameter-row">
            {/* <span className="parameter-label">Pressure</span> */}
            <img className="detal-icon" src="icons/flexibility.png" />
            <span className="parameter-value">{data.main.pressure} hPa</span>
          </div>
        </div>
        </div>
    </div>
  );
};

export default CurrentWeather;
