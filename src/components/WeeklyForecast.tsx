import { IDailyWeather } from '../types/weatherTypes';
import getWeatherIcon from '../utils/weatherUtils';

interface IWeeklyForecastProps {
  dailyData: IDailyWeather;
}

const WeeklyForecast = ({ dailyData }: IWeeklyForecastProps) => {
  return (
    <div className="flex flex-col lg:flex-row gap-10 lg:gap-20 justify-between">
      {dailyData.time.map((date, index) => (
        <div
          key={date}
          className={`flex lg:flex-col gap-2 sm:gap-6 ${
            index > 0
              ? 'border-t border-white/50 pt-10 lg:border-none lg:pt-0'
              : ''
          }`}
        >
          <div className="min-w-[100px] flex">
            <img
              src={getWeatherIcon(dailyData.weather_code[index])}
              alt="weather"
              aria-label="weather icon"
              className="max-w-[100px] max-h-[64px]"
            />
          </div>

          <div className="w-full justify-between lg:justify-start flex flex-col sm:flex-row lg:flex-col gap-4 font-bold items-center">
            <div>
              {new Date(date).toLocaleDateString('en-US', { weekday: 'long' })}
            </div>
            <div>
              {dailyData.temperature_2m_max[index]}°C /{' '}
              {dailyData.temperature_2m_min[index]}°C
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WeeklyForecast;
