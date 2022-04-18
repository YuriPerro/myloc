import { StyleSheet } from 'react-native';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { width } from '../../utils/device.utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.background,
  },
  containerItemSlide: {
    width: width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textItemSlide: {
    color: colors.label,
    lineHeight: 26,
    width: '90%',
    fontFamily: fonts.regular,
    fontSize: 18,
    textAlign: 'center',
  },
  containerContent: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  body: {
    width: '100%',
    paddingHorizontal: 40,
    paddingBottom: 20
  },
  containerBullets: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    bottom: 75,
  },
});
