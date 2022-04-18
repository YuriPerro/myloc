import React, { createContext, ReactNode, useEffect, useState } from 'react';
import { PermissionsAndroid } from 'react-native';

import Geolocation from 'react-native-geolocation-service';
import { isIphone } from '../../utils/device.utils';

type GeolocationContextProps = {
  hasLocationPermission: boolean;
  userLocation: Geolocation.GeoPosition | null | undefined;
  requestPermissionIOS: () => Promise<boolean>;
  requestPermissionAndroid: () => Promise<boolean>;
  checkLocationPermission: () => Promise<boolean>;
  fetchGeolocation: () => void;
};

type GeolocationProviderProps = {
  children: ReactNode;
};

export const GeolocationContext = createContext({} as GeolocationContextProps);

export const GeolocationProvider = ({ children }: GeolocationProviderProps) => {
  /*
  |-----------------------------------------------------------------------------
  | States.
  |-----------------------------------------------------------------------------
  |
  */
  const [hasLocationPermission, setHasLocationPermission] = useState(false);
  const [userLocation, setUserLocation] = useState<Geolocation.GeoPosition | null>();

  /*
  |-----------------------------------------------------------------------------
  | Functions.
  |-----------------------------------------------------------------------------
  |
  */

  const requestPermissionIOS = async () => {
    const whenInUsePermission = await Geolocation.requestAuthorization('whenInUse');
    if (whenInUsePermission === 'granted') {
      setHasLocationPermission(true);
      return true;
    }
    return false;
  };

  const requestPermissionAndroid = async () => {
    const foregroundPermission = await PermissionsAndroid.check(
      PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
    );

    if (foregroundPermission) {
      setHasLocationPermission(true);
      return true;
    }

    if (!foregroundPermission) {
      const statusForeground = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION
      );

      if (statusForeground === PermissionsAndroid.RESULTS.GRANTED)
        setHasLocationPermission(true);
      return true;
    }

    return false;
  };

  const checkLocationPermission = async () => {
    if (!hasLocationPermission) {
      if (isIphone) return await requestPermissionIOS();
      else return await requestPermissionAndroid();
    }
    return hasLocationPermission;
  };

  const fetchGeolocation = async () => {
    Geolocation.getCurrentPosition(
      (position) => setUserLocation(position),
      (error) => console.log(error),
      {
        enableHighAccuracy: true,
      }
    );
  };

  /*
  |-----------------------------------------------------------------------------
  | Effects.
  |-----------------------------------------------------------------------------
  |
  */

  useEffect(() => {
    if (hasLocationPermission) fetchGeolocation();
  }, [hasLocationPermission]);

  /*
  |-----------------------------------------------------------------------------
  | Renders.
  |-----------------------------------------------------------------------------
  |
  */

  return (
    <GeolocationContext.Provider
      value={{
        hasLocationPermission,
        userLocation,
        checkLocationPermission,
        requestPermissionAndroid,
        requestPermissionIOS,
        fetchGeolocation,
      }}>
      {children}
    </GeolocationContext.Provider>
  );
};
