import React from 'react';
import './WeatherCard.css';


const WeatherCard = ({ data }) => {
  if (!data) return null;

  // Extract weather information
  const { name, sys, main, weather, wind } = data;
  const { country } = sys;
  const { temp, feels_like, temp_min, temp_max, humidity, pressure } = main;
  const { main: weatherMain, description, icon } = weather[0];
  const { speed: windSpeed } = wind;

  // Get weather icon URL
  const iconUrl = `https://openweathermap.org/img/wn/${icon}@2x.png`;

  // Format temperature with degree symbol
  const formatTemp = (temp) => `${Math.round(temp)}°C`;

  // Format wind speed
  const formatWindSpeed = (speed) => `${Math.round(speed * 3.6)} km/h`; // Convert m/s to km/h

  // Format pressure
  const formatPressure = (pressure) => `${pressure} hPa`;

  return (
    <div className="weather-card">
      <div className="weather-card-header">
        <h2 className="weather-location">
          {name}, {country}
        </h2>
        <p className="weather-description">{description}</p>
      </div>

      <div className="weather-card-main">
        <div className="weather-icon-temp">
          <img 
            src={iconUrl} 
            alt={weatherMain} 
            className="weather-icon"
          />
          <div className="temperature">
            <span className="current-temp">{formatTemp(temp)}</span>
            <span className="feels-like">Feels like {formatTemp(feels_like)}</span>
          </div>
        </div>

        <div className="weather-details">
          <div className="temp-range">
            <span className="temp-min">↓ {formatTemp(temp_min)}</span>
            <span className="temp-max">↑ {formatTemp(temp_max)}</span>
          </div>

          <div className="weather-stats">
            <div className="stat-item">
              <span className="stat-label">Humidity</span>
              <span className="stat-value">{humidity}%</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Wind</span>
              <span className="stat-value">{formatWindSpeed(windSpeed)}</span>
            </div>
            <div className="stat-item">
              <span className="stat-label">Pressure</span>
              <span className="stat-value">{formatPressure(pressure)}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="weather-card-footer">
        <p className="weather-main-type">{weatherMain}</p>
      </div>
    </div>
  );
};

export default WeatherCard;