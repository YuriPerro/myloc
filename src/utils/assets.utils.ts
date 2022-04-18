import CLEARSKY_D from '../../src/assets/svg/01d.svg';
import CLEARSKY_N from '../../src/assets/svg/01n.svg';
import FEWCLOUDS_D from '../../src/assets/svg/02d.svg';
import FEWCLOUDS_N from '../../src/assets/svg/02n.svg';
import SCATTEREDCLOUDS_D from '../../src/assets/svg/03d.svg';
import SCATTEREDCLOUDS_N from '../../src/assets/svg/03n.svg';
import BROKENCLOUDS_D from '../../src/assets/svg/04d.svg';
import BROKENCLOUDS_N from '../../src/assets/svg/04d.svg';
import SHOWERRAIN_D from '../../src/assets/svg/09d.svg';
import SHOWERRAIN_N from '../../src/assets/svg/09n.svg';
import RAIN_D from '../../src/assets/svg/10d.svg';
import RAIN_N from '../../src/assets/svg/10n.svg';
import THUNDERSTOR_D from '../../src/assets/svg/11d.svg';
import THUNDERSTOR_N from '../../src/assets/svg/11n.svg';
import SNOW_D from '../../src/assets/svg/13d.svg';
import SNOW_N from '../../src/assets/svg/13n.svg';
import MIST_D from '../../src/assets/svg/50d.svg';
import MIST_N from '../../src/assets/svg/50n.svg';

enum ICONS {
  CLEARSKY_D = '01d',
  CLEARSKY_N = '01n',
  FEWCLOUDS_D = '02d',
  FEWCLOUDS_N = '02n',
  SCATTEREDCLOUDS_D = '03d',
  SCATTEREDCLOUDS_N = '03n',
  BROKENCLOUDS_D = '04d',
  BROKENCLOUDS_N = '04n',
  SHOWERRAIN_D = '09d',
  SHOWERRAIN_N = '09n',
  RAIN_D = '10d',
  RAIN_N = '10n',
  THUNDERSTOR_D = '11d',
  THUNDERSTOR_N = '11n',
  SNOW_D = '13d',
  SNOW_N = '13n',
  MIST_D = '50d',
  MIST_N = '50n',
}

export const getIllustrationById = (iconId: string) =>
  ({
    [ICONS.CLEARSKY_D]: CLEARSKY_D,
    [ICONS.CLEARSKY_N]: CLEARSKY_N,
    [ICONS.FEWCLOUDS_D]: FEWCLOUDS_D,
    [ICONS.FEWCLOUDS_N]: FEWCLOUDS_N,
    [ICONS.SCATTEREDCLOUDS_D]: SCATTEREDCLOUDS_D,
    [ICONS.SCATTEREDCLOUDS_N]: SCATTEREDCLOUDS_N,
    [ICONS.BROKENCLOUDS_D]: BROKENCLOUDS_D,
    [ICONS.BROKENCLOUDS_N]: BROKENCLOUDS_N,
    [ICONS.SHOWERRAIN_D]: SHOWERRAIN_D,
    [ICONS.SHOWERRAIN_N]: SHOWERRAIN_N,
    [ICONS.RAIN_D]: RAIN_D,
    [ICONS.RAIN_N]: RAIN_N,
    [ICONS.THUNDERSTOR_D]: THUNDERSTOR_D,
    [ICONS.THUNDERSTOR_N]: THUNDERSTOR_N,
    [ICONS.SNOW_D]: SNOW_D,
    [ICONS.SNOW_N]: SNOW_N,
    [ICONS.MIST_D]: MIST_D,
    [ICONS.MIST_N]: MIST_N,
  }[iconId]);
