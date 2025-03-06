import React from 'react';

const WeatherDisplay = ({ weatherData, error, isLoading }) => {
  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div className="error-message">Error: {error}</div>;
  }

  if (!weatherData) {
    return <div>Enter a city to see the weather.</div>;
  }

  const iconUrl = `http://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`;

  return (
    <div className="weather-card">
      <h2>{weatherData.name}, {weatherData.sys.country}</h2>
      <p className="weather-icon" >{weatherData.weather[0].description}</p>
        <div className='weather-info'>
          <div>
            <p>Temperature:</p>
            <p>{weatherData.main.temp}°C</p>
          </div>
          <div>
            <p>Weather:</p>
            <p>{weatherData.weather[0].description.charAt(0).toUpperCase() + weatherData.weather[0].description.slice(1)}</p>
          </div>
          <div>
            <p>Humidity:</p>
            <p>{weatherData.main.humidity}%</p>
          </div>
          <div>
            <p>Wind Speed:</p>
            <p>{weatherData.wind.speed} m/s</p>
          </div>
        </div>
    </div>
  );
};

export default WeatherDisplay;