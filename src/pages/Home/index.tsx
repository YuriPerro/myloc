import React, { useEffect, useMemo, useState } from 'react';
import {
  ActivityIndicator,
  Alert,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import { useGeolocation } from '../../hooks/useGeolocation';
import { fetchWeatherData, WeatherResponse } from '../../services/weather';
import { colors } from '../../styles/colors';
import { styles } from './styles';
import { getIllustrationById } from '../../utils/assets.utils';
import { fonts } from '../../styles/fonts';
import MapView, { Marker } from 'react-native-maps';
import { LinearGradient } from 'expo-linear-gradient';
import mapTheme from '../../assets/json/mapTheme.json';
import { Loading } from '../../components/Loading';
import { getMsgSalutation } from '../../utils/date.utils';
import Thermometer from '../../assets/svg/Thermometer.svg';
import Wind from '../../assets/svg/Wind.svg';
import { MotiView } from 'moti';

type CardProps = { label: string; description: string };

export const Home: React.FC = () => {
  /*
  |-----------------------------------------------------------------------------
  | States.
  |-----------------------------------------------------------------------------
  |
  */

  const [weatherData, setWeatherData] = useState<WeatherResponse>();
  const [loading, setLoading] = useState<boolean>(true);
  const [loadingRefresh, setLoadingRefresh] = useState<boolean>(true);

  /*
  |-----------------------------------------------------------------------------
  | Hooks.
  |-----------------------------------------------------------------------------
  |
  */

  const { userLocation, fetchGeolocation } = useGeolocation();

  /*
  |-----------------------------------------------------------------------------
  | Memos.
  |-----------------------------------------------------------------------------
  |
  */

  const WeatherIcon = useMemo(() => {
    if (weatherData) return getIllustrationById(weatherData.weather[0].icon);
    return getIllustrationById('01d');
  }, [weatherData])!;

  const windDescription = useMemo(() => {
    if (weatherData)
      return `${(weatherData.wind.speed * 3.6).toFixed(1).replace('.', ',')}km/h`;
  }, [weatherData]);

  const userRegion = useMemo(() => {
    return {
      latitude: userLocation?.coords.latitude!,
      longitude: userLocation?.coords.longitude!,
      latitudeDelta: 0.0112,
      longitudeDelta: 0.02,
    };
  }, [userLocation]);

  /*
  |-----------------------------------------------------------------------------
  | Functions.
  |-----------------------------------------------------------------------------
  |
  */

  const fetchWeather = async () => {
    try {
      if (userLocation) {
        const data = await fetchWeatherData({
          lat: userLocation?.coords.latitude,
          lon: userLocation?.coords.longitude,
        });
        console.log('🚀 ~ fetchWeather ~ data', data);

        if (data) setWeatherData(data);
      }
    } catch (error) {
      console.log('🚀 ~ fetchWeather ~ error', error);
      Alert.alert('Alerta!', 'Tivemos um problema ao carregar os dados.');
    } finally {
      setLoading(false);
      setLoadingRefresh(false);
    }
  };

  const refresh = async () => {
    setLoadingRefresh(true);
    fetchGeolocation();
    await fetchWeather();
  };

  /*
  |-----------------------------------------------------------------------------
  | Effects.
  |-----------------------------------------------------------------------------
  |
  */

  useEffect(() => {
    if (userLocation?.coords) fetchWeather();
  }, [userLocation]);

  /*
  |-----------------------------------------------------------------------------
  | Renders.
  |-----------------------------------------------------------------------------
  |
  */

  const Card = ({ label, description }: CardProps) => {
    return (
      <LinearGradient colors={[colors.dark800, colors.dark900]} style={styles.bgCard}>
        <Text style={styles.labelCard}>{label}</Text>
        <Text style={styles.descriptionCard}>{description}</Text>
      </LinearGradient>
    );
  };

  if (loading || !weatherData) return <Loading />;

  return (
    <View style={styles.container} testID="container">
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.scrollStyle}
        contentContainerStyle={styles.scrollContainerStyle}
        refreshControl={
          <RefreshControl
            refreshing={loadingRefresh}
            onRefresh={refresh}
            tintColor={colors.primary500}
          />
        }>
        <View style={styles.header}>
          <Text style={styles.textHeader}>{getMsgSalutation()}</Text>
          {loadingRefresh && <ActivityIndicator color={colors.primary500} />}
          {!loadingRefresh && (
            <Text style={styles.textHeader} onPress={refresh} testID="refresh-button">
              Atualizar
            </Text>
          )}
        </View>

        <View style={styles.body}>
          <Text style={styles.cityName}>{weatherData.name}</Text>
          <Text style={styles.weatherDescription}>
            {weatherData?.weather[0].description}
          </Text>

          <MotiView
            from={{
              translateY: -10,
            }}
            animate={{
              translateY: 10,
            }}
            transition={{
              loop: true,
              type: 'timing',
              duration: 1500,
              delay: 100,
            }}>
            <WeatherIcon width={250} height={190} style={{ marginTop: 10 }} />
          </MotiView>

          <View style={styles.containerTemp}>
            <Thermometer width={40} height={45} style={{ top: 8, left: 10 }} />
            <Text style={styles.tempName}>
              {Math.floor(Number(weatherData?.main.temp))}°
            </Text>
          </View>

          <Text style={{ fontFamily: fonts.light, color: colors.background200 }}>
            Sensação térmica {Math.floor(weatherData.main.feels_like)}°
          </Text>

          <View style={styles.rowTemp}>
            <Text style={styles.labelItemTemp}>{`Mín.: ${Math.floor(
              weatherData.main.temp_min
            )}°`}</Text>
            <Text style={styles.labelItemTemp}>
              {`Máx.: ${Math.floor(weatherData.main.temp_max)}°`}
            </Text>
          </View>

          <View style={styles.containerCards}>
            <Card description={`${weatherData.main.humidity}%`} label="Humidade" />
            <Card description={`${weatherData.main.pressure}hPa`} label="Pressão" />
            <Card
              description={`${Math.floor(weatherData.visibility / 1000)}km`}
              label="Visibilidade"
            />
          </View>
        </View>

        <View style={styles.containerWind}>
          <Wind width={60} height={60} />
          <View style={styles.wrappedWind}>
            <Text style={styles.titleWind}>Velocidade do vento</Text>
            <Text style={styles.labelWind}>{windDescription}</Text>
          </View>
        </View>

        <View style={styles.containerMap}>
          <MapView
            showsUserLocation
            showsMyLocationButton={false}
            style={styles.map}
            customMapStyle={mapTheme}
            region={userRegion}>
            <Marker
              anchor={{
                x: 0.5,
                y: 0.45,
              }}
              coordinate={{
                latitude: userLocation?.coords.latitude!,
                longitude: userLocation?.coords.longitude!,
              }}>
              <MotiView
                from={{ opacity: 0.5 }}
                animate={{ opacity: 1 }}
                transition={{ loop: true, duration: 1500 }}>
                <View style={styles.marker}>
                  <Text style={styles.textMarker}>Você está aqui</Text>
                </View>
              </MotiView>
            </Marker>
          </MapView>
        </View>

        <Text
          style={{ fontFamily: fonts.bold, color: colors.background400, marginTop: 40 }}>
          Made by Yuri Baumgartner
        </Text>
      </ScrollView>
    </View>
  );
};
