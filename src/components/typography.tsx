import { Platform, StyleSheet, TextStyle } from 'react-native';
import styled from '@emotion/native';
import { FONT_SIZES } from '@constants/font-sizes';

//
//

const isIos = Platform.OS === 'ios';

export const Typography = styled.Text<{
  weight?: keyof typeof ThemeFont;
  fontSize?: TextStyle['fontSize'];
  color?: TextStyle['color'];
}>(({ fontSize = FONT_SIZES.base, weight = 'regular', color }) => ({
  fontSize,
  color,
  lineHeight: fontSize * 1.5,
  ...ThemeFont[weight],
}));

export const ThemeFont = StyleSheet.create({
  light: {
    fontFamily: 'IBMPlexSansArabic-Light',
    fontWeight: isIos ? '300' : undefined,
  },
  regular: {
    fontFamily: 'IBMPlexSansArabic',
    fontWeight: isIos ? '400' : undefined,
  },
  medium: {
    fontFamily: 'IBMPlexSansArabic-Medm',
    fontWeight: isIos ? '500' : undefined,
  },
  semiBold: {
    fontFamily: 'IBMPlexSansArabic-SmBld',
    fontWeight: isIos ? '600' : undefined,
  },
  bold: {
    fontFamily: 'IBMPlexSansArabic-Bold',
    fontWeight: isIos ? '700' : undefined,
  },
});
