import { useContext } from 'react';
import { GeolocationContext } from '../contexts/geolocation';

export const useGeolocation = () => useContext(GeolocationContext);
