import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import { onboardingItems, OnboardingItemsProps } from '../../utils/mock.utils';
import { styles } from './styles';
import { width } from '../../utils/device.utils';
import AnimatedLottieView from 'lottie-react-native';
import weatherAnimation from '../../assets/json/weather.json';
import locationAnimation from '../../assets/json/location.json';
import { Button } from '../../components/Button';
import { Bullet } from './components/Bullet';

import { useGeolocation } from '../../hooks/useGeolocation';
import { StackActions, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Screens, StackListProps } from '../../stack/types';

type NavigationProps = NativeStackNavigationProp<StackListProps, Screens.ONBOARDING>;

export const Onboarding: React.FC = () => {
  /*
  |-----------------------------------------------------------------------------
  | States.
  |-----------------------------------------------------------------------------
  |
  */

  const [activedIndex, setActivedIndex] = useState(1);

  /*
  |-----------------------------------------------------------------------------
  | Refs.
  |-----------------------------------------------------------------------------
  |
  */

  const flatListRef = useRef<any>();

  /*
  |-----------------------------------------------------------------------------
  | Hooks.
  |-----------------------------------------------------------------------------
  |
  */

  const { checkLocationPermission } = useGeolocation();
  const { dispatch } = useNavigation<NavigationProps>();

  /*
  |-----------------------------------------------------------------------------
  | Constants.
  |-----------------------------------------------------------------------------
  |
  */

  const illustrations: JSX.Element[] = [
    <AnimatedLottieView source={weatherAnimation} style={{ width: 300 }} autoPlay loop />,
    <AnimatedLottieView
      source={locationAnimation}
      style={{ width: 300 }}
      autoPlay
      loop
    />,
  ];

  /*
  |-----------------------------------------------------------------------------
  | Functions.
  |-----------------------------------------------------------------------------
  |
  */

  const onScrollEnd = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    const pageNumber = Math.min(
      Math.max(Math.floor(event.nativeEvent.contentOffset.x / width + 0.5) + 1, 0),
      onboardingItems.length
    );
    setActivedIndex(pageNumber);
  };

  const onPressButton = async () => {
    if (activedIndex === 1) {
      setActivedIndex(2);
      flatListRef.current?.scrollToEnd();
    } else {
      await checkLocationPermission();
      dispatch(StackActions.replace(Screens.HOME));
    }
  };

  /*
  |-----------------------------------------------------------------------------
  | Renders.
  |-----------------------------------------------------------------------------
  |
  */

  const renderItem = ({ item, index }: { item: OnboardingItemsProps; index: number }) => {
    return (
      <View style={styles.containerItemSlide} testID={`item-${index}`}>
        <View style={{ bottom: 30 }}>{illustrations[item.id - 1]}</View>
        <Text style={styles.textItemSlide}>{item.text}</Text>
      </View>
    );
  };

  const keyExtractor = (item: OnboardingItemsProps) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        pagingEnabled
        horizontal
        bounces={false}
        onMomentumScrollEnd={onScrollEnd}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.containerContent}
        data={onboardingItems}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        testID="onboarding-flatlist"
      />

      <View style={styles.body}>
        <View style={styles.containerBullets}>
          <Bullet isActive={activedIndex === 1} />
          <Bullet isActive={activedIndex === 2} />
        </View>
        <Button
          label={activedIndex === 1 ? 'Próximo' : 'Confirmar'}
          onPress={onPressButton}
          testID="onboarding-button-next"
        />
      </View>
    </View>
  );
};
