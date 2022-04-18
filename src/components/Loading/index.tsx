import React from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { colors } from '../../styles/colors';
import { styles } from './styles';

export const Loading = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.primary500} />
      <Text style={styles.label}>Aguarde enquanto personalizamos seus dados...</Text>
    </View>
  );
};
