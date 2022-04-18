import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import { NavigationContainer } from '@react-navigation/native';
import { height, width } from '../src/utils/device.utils';
import { Routes } from '../src/stack/routes';

describe('Testing Onboarding screen', () => {
  const component = (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
  );

  const eventData = {
    nativeEvent: {
      contentOffset: {
        x: width,
        y: 0,
      },
      contentSize: {
        // Dimensions of the scrollable content
        height: 500,
        width: width,
      },
      layoutMeasurement: {
        // Dimensions of the device
        height: height,
        width: width,
      },
    },
  };

  it('should be visible and pressable button next slide', async () => {
    const { findByTestId, queryByText } = render(component);
    const button = await findByTestId('onboarding-button-next');

    fireEvent.press(button);
    const buttonPressed = await queryByText('Confirmar');

    expect(buttonPressed).not.toBeNull();
  });

  it('should be scrolable flatlist and have items', async () => {
    const { findByTestId, getByTestId } = render(component);
    const flatlist = await findByTestId('onboarding-flatlist');

    fireEvent.scroll(flatlist, eventData);

    expect(getByTestId('item-0')).not.toBeNull();
    expect(getByTestId('item-1')).not.toBeNull();
  });
});
