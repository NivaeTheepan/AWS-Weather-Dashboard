import './App.css';
import React, { useState } from 'react';
import WeatherCard from './WeatherCard';
import DarkVeil from './DarkVeil.js';
import ShinyText from './ShinyText.js';
import { getWeatherData } from './services/weatherService';

function App() {
  const [city, setCity] = useState('');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const fetchWeather = async () => {
    if (!city.trim()) {
      setError('Please enter a city name');
      return;
    }

    setLoading(true);
    setError('');
    
    try {
      const weatherData = await getWeatherData(city);
      setWeather(weatherData);
    } catch (err) {
      setError(err.message);
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      fetchWeather();
    }
  };

  return (
    <div className="App">
      <div className="darkveil-container">
        <DarkVeil />
      </div>
      
      {!weather ? (
        <>
          <div className="shinytext-container">
            <ShinyText text="Weather Dashboard" disabled={false} speed={3} className='custom-class' /> 
          </div>
          
          <div className="weather-form">
            <input 
              value={city} 
              onChange={(e) => setCity(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Enter city name" 
              disabled={loading}
            />
            <button onClick={fetchWeather} disabled={loading}>
              {loading ? 'Loading...' : 'Get Weather'}
            </button>
            
            {error && <div className="error-message">{error}</div>}
          </div>
        </>
      ) : (
        <div className="weather-card-container">
          <WeatherCard data={weather} />
          <button 
            onClick={() => setWeather(null)} 
            className="search-again-btn"
          >
            Search Again
          </button>
        </div>
      )}
    </div>
  );
}

export default App;