import axios from 'axios';
import { useState } from 'react';
import { IWeatherData } from '../types/weatherTypes';
import { WEATHER_BASE_URL } from '../utils/publicAPIs';
const useWeatherData = () => {
  const [weatherData, setWeatherData] = useState<IWeatherData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [weatherError, setWeatherError] = useState<string | null>(null);

  const fetchWeatherData = async (latitude: number, longitude: number) => {
    try {
      setLoading(true);
      setWeatherError(null);
      const today = new Date();
      const startDate = new Date(today);
      startDate.setDate(today.getDate() + 1);

      const endDate = new Date(startDate);
      endDate.setDate(startDate.getDate() + 4);

      const startDateString = startDate.toISOString().split('T')[0];
      const endDateString = endDate.toISOString().split('T')[0];

      const response = await axios.get(
        `${WEATHER_BASE_URL}?latitude=${latitude}&longitude=${longitude}&current_weather=true&daily=temperature_2m_max,temperature_2m_min,weather_code&timezone=auto&start_date=${startDateString}&end_date=${endDateString}`
      );
      setWeatherData(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching weather data', error);
      setWeatherError('Error fetching weather data, please try again');
      setLoading(false);
    }
  };

  return { weatherData, loading, weatherError, fetchWeatherData };
};

export default useWeatherData;
