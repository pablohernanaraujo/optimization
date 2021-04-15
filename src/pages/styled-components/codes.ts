export const app = `import React, { FunctionComponent } from 'react';
import { useRecoilValue } from 'recoil';

import { SplashManager } from '@core/splash-manager';
import { RootNavigator } from '@routing';
import { statusBar } from '@store';
import ThemeProvider from '@theme/context';
import { StatusBar } from '@ui/status-bar';

export const App: FunctionComponent = () => {
  const statusBarStatus = useRecoilValue(statusBar);

  return (
    <ThemeProvider>
      <StatusBar
        barStyle="light-content"
        backgroundColor="darkBackground"
        statusBarStatus={statusBarStatus}
      />
      <SplashManager />
      <RootNavigator />
    </ThemeProvider>
  );
};
`;

export const context = `import React, { FunctionComponent } from 'react';
import { ThemeProvider as Provider } from 'styled-components/native';

import { colors } from './colors';
import { emphasis } from './emphasis';
import { spacers } from './spacers';
import { fontSize, fontWeight } from './text';

const ThemeProvider: FunctionComponent = ({
  /** Internal content componets */
  children,
}) => (
  <Provider
    theme={{
      colors,
      spacers,
      emphasis,
      text: {
        fontSize,
        fontWeight,
      },
    }}
  >
    {children}
  </Provider>
);

export default ThemeProvider;
`;

export const styledComponents = `import * as styledComponents from 'styled-components/native';

import { ColorsType } from './colors';
import { EmphasisType } from './emphasis';
import { SpacersType } from './spacers';
import { FontSizeType, FontWeightType } from './text';

const {
  default: styled,
  ThemeProvider,
  css,
  ThemeContext,
} = styledComponents as styledComponents.ReactNativeThemedStyledComponentsModule<{
  colors: ColorsType;
  emphasis: EmphasisType;
  spacers: SpacersType;
  text: {
    fontSize: FontSizeType;
    fontWeight: FontWeightType;
  };
}>;

export { ThemeProvider, css, ThemeContext };
export default styled;
`;

export const styledComponentsUse = `// Bad
import styled, { ThemeContext } from 'styled-components';

// Good
import styled, { ThemeContext } from '@theme/styled-components';
`;
