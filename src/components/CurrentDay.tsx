import { IGeoResponse } from '../types/geoTypes';
import { IWeatherData } from '../types/weatherTypes';
import { formatDay, getCurrentLocalTime } from '../utils/dateUtils';
import { getWeatherIcon } from '../utils/weatherUtils';

const CurrentDay = ({
  weatherData,
  geoResponse,
}: {
  weatherData: IWeatherData;
  geoResponse: IGeoResponse | null;
}) => {
  return (
    <div className="w-full flex flex-col sm:flex-row justify-center sm:items-end sm:justify-start gap-10 sm:gap-10 border-b border-white/50 pb-10">
      {weatherData && weatherData.current_weather && (
        <>
          <img
            className="w-[200px] aspect-[4/3]"
            src={getWeatherIcon(weatherData.current_weather.weather_code)}
            alt="current weather icon"
            aria-label="current weather icon"
          />
          <div className="flex flex-col gap-2">
            <h2 className="text-4xl font-bold">
              {weatherData.current_weather.temperature}
              {weatherData.current_weather_units.temperature}
            </h2>
            <div className="text-2xl font-semibold">
              {geoResponse?.results[0].name}
            </div>
            <time className="flex gap-2">
              <p>{formatDay(weatherData.current_weather.time)}</p>
              <p>{getCurrentLocalTime(weatherData.timezone)}</p>
            </time>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentDay;
