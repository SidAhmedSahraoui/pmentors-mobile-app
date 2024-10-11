import {fontFamilies} from '../constants/Fonts';

export const getFontFamily = (
  isLTR: boolean,
  weight: 'normal' | 'medium' | 'bold',
) => {
  const selectedFontFamily = fontFamilies.MONTSERRAT
  return selectedFontFamily[weight];
};