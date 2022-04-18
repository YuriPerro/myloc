import React from 'react';
import { Text, TouchableOpacity, TouchableOpacityProps } from 'react-native';
import { colors } from '../../styles/colors';
import { LinearGradient, LinearGradientProps } from 'expo-linear-gradient';
import { styles } from './styles';

type ButtonProps = TouchableOpacityProps & {
  label?: string;
  colorsGradient?: string[];
  onPress?: () => void;
};

export const Button = ({
  label = 'Press me',
  colorsGradient,
  onPress,
  ...rest
}: ButtonProps) => {
  /*
  |-----------------------------------------------------------------------------
  | Constants.
  |-----------------------------------------------------------------------------
  |
  */

  const colorsGradientList = colorsGradient
    ? colorsGradient
    : [colors.primary500, colors.primary600];

  /*
  |-----------------------------------------------------------------------------
  | Renders.
  |-----------------------------------------------------------------------------
  |
  */

  return (
    <TouchableOpacity
      activeOpacity={0.7}
      onPress={onPress}
      style={{
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      {...rest}>
      <LinearGradient
        colors={colorsGradientList}
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          width: '100%',
          height: '100%',
          borderRadius: 4,
        }}>
        <Text style={styles.label}>{label}</Text>
      </LinearGradient>
    </TouchableOpacity>
  );
};
