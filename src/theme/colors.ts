import { palette } from './palette';

export const colors = {
  black: palette.black,
  white: palette.white,
  primary: palette.neoFuchsia,
  text: palette.chimneySweep,
  background: palette.white,
  lightBackground: palette.bleachedSilk,
  darkBackground: palette.carbon,
  disabledBackground: palette.whiteBlue,
  modalBackground: palette.black,
  danger: palette.redMull,
  link: palette.doverStraits,
  success: palette.vitalize,
  highlight: palette.windsweptBeatch,
};

export type ColorsType = typeof colors;
export type KeyColors = keyof ColorsType;
