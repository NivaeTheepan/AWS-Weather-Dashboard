import axios from 'axios';

const LAMBDA_FUNCTION_URL = process.env.REACT_APP_LAMBDA_URL;

export const getWeatherData = async (city) => {
  try {
    console.log('Fetching weather for:', city);
    const response = await axios.get(LAMBDA_FUNCTION_URL, {
      params: { city },
      timeout: 10000 // 10 second timeout
    });
    
    console.log('Weather data received:', response.data);
    return response.data;
  } catch (error) {
    console.error('Error fetching weather from Lambda:', error);
    
    if (error.response) {
      // Server responded with error status
      console.error('Response status:', error.response.status);
      console.error('Response data:', error.response.data);
      
      if (error.response.status === 404) {
        throw new Error('City not found. Please check the spelling.');
      } else if (error.response.status === 400) {
        throw new Error('Please enter a city name');
      } else if (error.response.status === 502) {
        throw new Error('Service temporarily unavailable. Please try again later.');
      }
    } else if (error.request) {
      // Request was made but no response received
      console.error('No response received:', error.request);
      throw new Error('Network error. Please check your connection and try again.');
    }
    
    throw new Error('Failed to fetch weather data. Please try again.');
  }
};