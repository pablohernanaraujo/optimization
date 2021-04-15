export const palette = `export const palette = {
  black: '#000000',
  direWolf: '#272727',
  backLacquer: '#403d3d',
  carbon: '#333333',
  knightsArmor: '#5C5C5C',
  stonewallGrey: '#C1C1C1',
  windsweptBeatch: '#E4E4E4',
  drWhite: '#FAFAFA',
  bleachedSilk: '#F3F3F3',
  white: '#ffffff',
  chimneySweep: '#283238',
  doverStraits: '#3366BB',
  amour: '#EE5350',
  redMull: '#FF8888',
  peppermintFrosting: '#B2FAEA',
  mintTulip: '#C5EDDB',
  pearCactus: '#91b086',
  fogGreen: '#c1cdb5',
  stemGreen: '#AAE48E',
  applegate: '#8FC177',
  vitalize: '#28AC42',
  colorMeGreen: '#7ec177',
};
`;

export const colors = `import { palette } from './palette';

export const colors = {
  black: palette.black,
  white: palette.white,
  primary: palette.pearCactus,
  darkGradient: palette.colorMeGreen,
  text: palette.chimneySweep,
  background: palette.white,
  lightBackground: palette.bleachedSilk,
  darkBackground: palette.carbon,
  disabledBackground: palette.stonewallGrey,
  modalBackground: palette.black,
  danger: palette.redMull,
  link: palette.doverStraits,
  success: palette.vitalize,
  priorityHigh: palette.direWolf,
  priorityMedium: palette.knightsArmor,
};

export type ColorsType = typeof colors;
export type KeyColors = keyof ColorsType;
`;

export const emphasis = `export type KeyEmphasis = 'high' | 'medium' | 'low' | 'pure';

export type EmphasisType = {
  [key in KeyEmphasis]: number;
};

export const emphasis: EmphasisType = {
  high: 0.87,
  medium: 0.6,
  low: 0.38,
  pure: 1,
};`;

export const spacers = `const base = 8;

export const spacers = {
  xl: \`\${base * 8}px\`,
  l: \`\${base * 6}px\`,
  m: \`\${base * 3}px\`,
  s: \`\${base * 2}px\`,
  xs: \`\${base}px\`,
};

export type SpacersType = typeof spacers;
export type KeySizes = keyof typeof spacers;
`;

export const text = `export const fontSize = {
  xxl: '28px',
  xl: '24px',
  l: '18px',
  m: '16px',
  s: '14px',
  xs: '12px',
  xxs: '10px',
};

export type FontSizeType = typeof fontSize;
export type KeyFontSize = keyof FontSizeType;

export const fontWeight = {
  hairLine: 'Hairline',
  thin: 'Thin',
  light: 'Light',
  regular: 'Regular',
  medium: 'Medium',
  bold: 'Bold',
  extraBold: 'EctraBold',
  black: 'Black',
};

export type FontWeightType = typeof fontWeight;
export type KeyFontWeight = keyof FontWeightType;
`;
