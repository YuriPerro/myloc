import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  label: {
    fontFamily: fonts.bold,
    color: colors.background200,
    marginTop: 20,
    fontSize: RFValue(16),
    textAlign: 'center',
    paddingHorizontal: 30,
  },
});
