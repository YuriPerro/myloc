import { Dimensions, Platform } from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const isIphone = Platform.OS === 'ios'

export { width, height, isIphone };
