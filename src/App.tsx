import React from 'react';
import { Onboarding } from './pages/Onboarding';
import {
  useFonts,
  Lato_400Regular,
  Lato_700Bold,
  Lato_300Light,
} from '@expo-google-fonts/lato';
import AppLoading from 'expo-app-loading';
import { SafeAreaView, StatusBar } from 'react-native';
import { StatusBar as StatusBarExpo } from 'expo-status-bar';
import { colors } from './styles/colors';
import { GeolocationProvider } from './contexts/geolocation';
import { Routes } from './stack/routes';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  /*
  |-----------------------------------------------------------------------------
  | Hooks.
  |-----------------------------------------------------------------------------
  |
  */

  const [fontsLoaded] = useFonts({
    Lato_300Light,
    Lato_400Regular,
    Lato_700Bold,
  });

  /*
  |-----------------------------------------------------------------------------
  | Renders.
  |-----------------------------------------------------------------------------
  |
  */

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: StatusBar.currentHeight,
        backgroundColor: colors.background,
      }}>
      <StatusBarExpo style="light" />
      <GeolocationProvider>
        <NavigationContainer>
          <Routes />
        </NavigationContainer>
      </GeolocationProvider>
    </SafeAreaView>
  );
}
