export interface IWeatherData {
  current_weather: ICurrentWeather;
  current_weather_units: IWeatherUnits;
  latitude: number;
  longitude: number;
  timezone: string;
  timezone_abbreviation: string;
  daily: IDailyWeather;
}

interface IWeatherUnits {
  temperature: string;
}

export interface IDailyWeather {
  temperature_2m_max: number[];
  temperature_2m_min: number[];
  weather_code: number[];
  time: string[];
}

interface ICurrentWeather {
  temperature: number;
  time: string;
  weather_code: number;
}
