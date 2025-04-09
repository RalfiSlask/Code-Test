import axios from 'axios';
import { useState } from 'react';
import useWeatherData from '../hooks/useWeatherData';
import { IGeoResponse } from '../types/geoTypes';
import { GEOCODING_BASE_URL } from '../utils/publicAPIs';
import CurrentDay from './CurrentDay';
import { SearchPanel } from './SearchPanel';
import WeeklyForecast from './WeeklyForecast';

const WeatherPresentation = () => {
  const { weatherData, loading, weatherError, fetchWeatherData } =
    useWeatherData();
  const [geoResponse, setGeoResponse] = useState<IGeoResponse | null>(null);
  const [city, setCity] = useState<string>('');
  const [geoError, setGeoError] = useState<string | null>(null);
  const [cityInputValue, setCityInputValue] = useState<string>('');

  const handleCityValueOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCityInputValue(e.target.value);
    setCity(e.target.value);
    setGeoError(null);
  };

  const handleSearch = async () => {
    setGeoError(null);
    try {
      const geoResponse = await axios.get(
        `${GEOCODING_BASE_URL}?name=${city}&count=1&language=en&format=json`
      );
      if (geoResponse.data.results.length === 0) {
        setGeoError('City not found, please try again');
        return;
      }
      const { latitude, longitude } = geoResponse.data.results[0];
      setGeoResponse(geoResponse.data);
      fetchWeatherData(latitude, longitude);
    } catch (error) {
      console.error('Error fetching location data', error);
      setGeoError('Error fetching location data, please try again');
    }
  };

  return (
    <section className="w-full flex flex-col gap-10 max-w-[1024px]">
      <SearchPanel
        searchOnClick={handleSearch}
        cityInputValue={cityInputValue}
        handleCityValueOnChange={handleCityValueOnChange}
      />
      {loading && <div>Loading...</div>}
      {weatherError && <div className="text-red-400">{weatherError}</div>}
      {geoError && <div className="text-red-400">{geoError}</div>}
      {geoResponse && weatherData && (
        <>
          <CurrentDay weatherData={weatherData} geoResponse={geoResponse} />
          <WeeklyForecast dailyData={weatherData.daily} />
        </>
      )}
    </section>
  );
};

export default WeatherPresentation;
