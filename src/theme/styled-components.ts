import * as styledComponents from 'styled-components';

import { ColorsType } from './colors';
import { EmphasisType } from './emphasis';
import { SpacersType } from './spacers';
import { FontSizeType, FontWeightType } from './text';

const {
  default: styled,
  ThemeProvider,
  createGlobalStyle,
  css,
  ThemeContext,
  keyframes,
} = styledComponents as unknown as styledComponents.ThemedStyledComponentsModule<{
  colors: ColorsType;
  emphasis: EmphasisType;
  spacers: SpacersType;
  text: {
    fontSize: FontSizeType;
    fontWeight: FontWeightType;
  };
  isMobile: boolean;
}>;

export { ThemeProvider, createGlobalStyle, css, ThemeContext, keyframes };
export default styled;
