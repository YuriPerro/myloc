import { AxiosResponse } from 'axios';
import { api } from './api';

import { API_KEY } from '@env';

type FetchWeatherDataProps = {
  lat: number;
  lon: number;
};

export type WeatherResponse = {
  coord: {
    lon: number;
    lat: number;
  };
  weather: [
    {
      id: number;
      main: string;
      description: string;
      icon: string;
    }
  ];
  base: string;
  main: {
    temp: number;
    feels_like: number;
    temp_min: number;
    temp_max: number;
    pressure: number;
    humidity: number;
  };
  visibility: number;
  wind: {
    speed: number;
    deg: number;
  };
  clouds: {
    all: number;
  };
  dt: number;
  sys: {
    type: number;
    id: number;
    message: number;
    country: string;
    sunrise: number;
    sunset: number;
  };
  timezone: number;
  id: number;
  name: string;
  cod: number;
};

export const fetchWeatherData = async ({ lat, lon }: FetchWeatherDataProps) => {
  const { data } = await api.get<WeatherResponse>(
    `weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&lang=pt_br&units=metric`
  );

  if (data) return data;
};
