import {Platform} from 'react-native';

export const isIOS = () => {
  return Platform.OS === 'ios';
};

export const fontFamilies = {
  MONTSERRAT: {
    thin: isIOS() ? 'Montserrat-Thin' : 'MontserratThin',
    normal: isIOS() ? 'Montserrat-Regular' : 'MontserratRegular',
    medium: isIOS() ? 'Montserrat-Medium' : 'MontserratMedium',
    semiBold: isIOS() ? 'Montserrat-SemiBold' : 'MontserratSemiBold',
    bold: isIOS() ? 'Montserrat-Bold' : 'MontserratBold',
    extraBold: isIOS() ? 'Montserrat-ExtraBold' : 'MontserratExtraBold',
    black: isIOS() ? 'Montserrat-Black' : 'MontserratBlack',
    light: isIOS() ? 'Montserrat-Light' : 'MontserratLight',
    extraLight: isIOS() ? 'Montserrat-ExtraLight' : 'MontserratExtraLight',
  },
  // Adjust the above code to fit your chosen fonts' names
};