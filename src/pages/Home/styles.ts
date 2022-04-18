import { StyleSheet } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';
import { colors } from '../../styles/colors';
import { fonts } from '../../styles/fonts';
import { height, width } from '../../utils/device.utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  scrollStyle: {
    flex: 1,
    width: '100%',
  },
  scrollContainerStyle: {
    alignItems: 'center',
    width: '100%',
    minHeight: '100%',
    paddingBottom: 20,
  },
  header: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 10,
    paddingHorizontal: 25,
  },
  textHeader: {
    color: colors.label,
    fontFamily: fonts.regular,
    fontSize: RFValue(13),
  },
  body: {
    marginTop: 15,
    alignItems: 'center',
    width: '100%',
  },
  containerTemp: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowTemp: {
    width: '100%',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 15,
    paddingHorizontal: 30,
  },
  cityName: {
    fontFamily: fonts.light,
    fontSize: RFValue(20),
    color: colors.background200,
  },
  tempName: {
    fontFamily: fonts.light,
    fontSize: RFValue(60),
    color: colors.label,
    marginTop: 15,
  },
  weatherDescription: {
    fontFamily: fonts.light,
    fontSize: RFValue(15),
    color: colors.background200,
  },
  containerMap: {
    alignItems: 'center',
    overflow: 'hidden',
    width: '90%',
    height: 200,
    borderRadius: 15,
    elevation: 10,

    borderBottomWidth: 4,
    borderBottomColor: colors.primary500,
  },
  labelItemTemp: {
    fontFamily: fonts.regular,
    color: colors.background200,
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  bgCard: {
    alignItems: 'center',
    height: 130,
    width: 100,
    justifyContent: 'space-between',
    borderRadius: 7,
    paddingVertical: 14,
    backgroundColor: colors.primary600,
    elevation: 11,
  },
  labelCard: {
    color: colors.label,
    textAlign: 'center',
    fontFamily: fonts.regular,
  },
  descriptionCard: {
    fontFamily: fonts.bold,
    fontSize: RFValue(17),
    marginTop: 10,
    color: colors.label,
  },
  containerCards: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  containerWind: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wrappedWind: {
    marginLeft: 30,
    marginVertical: 30,
    alignItems: 'center',
  },
  labelWind: {
    fontFamily: fonts.bold,
    color: colors.background200,
    fontSize: RFValue(18),
    marginTop: 5,
  },
  titleWind: {
    fontFamily: fonts.regular,
    color: colors.background400,
    fontSize: RFValue(14),
  },
  marker: {
    paddingVertical: 4,
    paddingHorizontal: 10,
    backgroundColor: colors.secondary,
    marginBottom: 70,
    borderRadius: 4,
  },
  textMarker: {
    fontFamily: fonts.bold,
    color: colors.label,
  },
});
