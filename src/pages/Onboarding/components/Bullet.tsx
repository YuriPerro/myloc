import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../styles/colors';

export const Bullet = ({ isActive }: { isActive: boolean }) => (
  <View
    style={[
      styles.bullet,
      {
        backgroundColor: isActive ? colors.primary500 : colors.label,
      },
    ]}
  />
);

const styles = StyleSheet.create({
  bullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 5,
  },
});
