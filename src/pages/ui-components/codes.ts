export const structureComponent = `component
--component.tsx
--index.ts
`;

export const index = `export { Component } from './component';`;

export const structureComponentComplex = `component
--base.ts/x
--regular.tsx
--complex.tsx
--index.ts
`;

export const indexComplex = `export { Regular } from './regular';
export { Complex } from './complex';
`;

export const container = `import React, { FunctionComponent } from 'react';
import { ScrollView, StyleSheet } from 'react-native';

import { KeyColors } from '@theme/colors';
import { ScreenWrapper } from '../screen-wrapper';

const wrapperStyles = StyleSheet.create({
  contentContainerStyle: {
    flexGrow: 1,
    justifyContent: 'space-between',
  },
});

interface ContainerProps {
  testID?: string;
  backgroundColor?: KeyColors;
}

export const Container: FunctionComponent<ContainerProps> = ({
  /** Test id for test */
  testID,
  /** Internal content componets */
  children,
  /** Background color for screen */
  backgroundColor,
}) => (
  <ScreenWrapper
    backgroundColor={backgroundColor || 'background'}
    testID={testID}
  >
    <ScrollView
      scrollEventThrottle={16}
      alwaysBounceVertical={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={wrapperStyles.contentContainerStyle}
    >
      {children}
    </ScrollView>
  </ScreenWrapper>
);
`;

export const containerUse = `import React, { FunctionComponent } from 'react';

import { ButtonRegular } from '@ui/buttons';
import { Container } from '@ui/continer';
import { Group } from '@ui/group';
import { H2 } from '@ui/typography';

export const Home: FunctionComponent = () => (
  <Container>
    <Group type="header">
      <H2>Title</H2>
    </Group>
    <Group type="footer">
      <ButtonRegular
        text="Button
        onActionHandle={() => null}
        accessibilityLabel="Button
      />
    </Group>
  </Container>
);
`;

export const screenWrapper = `import React, { FunctionComponent } from 'react';

import { KeyColors } from '@theme/colors';
import styled from '@theme/styled-components';

const Wrapper = styled.View<ScreenWrapperProps>\`
  flex: 1;
  background-color: \${({ theme, backgroundColor }) =>
    backgroundColor ? theme.colors[backgroundColor] : theme.colors.background};
  \${({ transparent }) =>
    transparent &&
    \`
  background-color: transparent;
  \`};
\`;

const SafeArea = styled.SafeAreaView\`
  flex: 1;
  justify-content: space-between;
\`;

interface ScreenWrapperProps {
  testID?: string;
  backgroundColor?: KeyColors;
  withoutSafeArea?: boolean;
  transparent?: boolean;
}

export const ScreenWrapper: FunctionComponent<ScreenWrapperProps> = ({
  /** Test id for test */
  testID,
  /** Internal content componets */
  children,
  /** Background color for screen */
  backgroundColor,
  /** With dont use safe area */
  withoutSafeArea,
  /** Make background transparent */
  transparent,
}) => (
  <Wrapper
    testID={testID}
    backgroundColor={backgroundColor}
    transparent={transparent}
  >
    {withoutSafeArea ? children : <SafeArea>{children}</SafeArea>}
  </Wrapper>
);
`;

export const screenWrapperUse = `import React, { FunctionComponent } from 'react';

import { ButtonRegular } from '@ui/buttons';
import { Group } from '@ui/group';
import { ScreenWrapper } from '@ui/screen-wrapper';
import { H2 } from '@ui/typography';

export const Home: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>Title</H2>
    </Group>
    <Group type="footer">
      <ButtonRegular
        text="Button"
        onActionHandle={() => null}
        accessibilityLabel="Button"
      />
    </Group>
  </ScreenWrapper>
);
`;

export const group = `import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';

import styled from '@theme/styled-components';

type KeyGroup =
  | 'header'
  | 'headerModal'
  | 'body'
  | 'bodyWithButtonContent'
  | 'bodyWithButton'
  | 'footer'
  | 'borderless';
type KeyContent = 'left' | 'center' | 'right';

type GroupType = Pick<ViewProps, 'testID'>;

interface GroupProps extends GroupType {
  type?: KeyGroup;
  content?: KeyContent;
}

const WrapperGroup = styled.View<Pick<GroupProps, 'type' | 'content'>>\`
  padding: 0 \${({ theme }) => theme.spacers.l};
  \${({ theme, type }) =>
    type === 'header' &&
    \`
    padding-top: \${theme.spacers.l};
  \`};
  \${({ type, theme }) =>
    type === 'headerModal' &&
    \`
    padding-top: \${theme.spacers.xs};
  \`};
  \${({ type }) =>
    type === 'body' &&
    \`
    flex: 1;
  \`};
  \${({ theme, type }) =>
    type === 'bodyWithButtonContent' &&
    \`
    padding: 0 \${theme.spacers.l};
  \`};
  \${({ theme, type }) =>
    type === 'bodyWithButton' &&
    \`
    flex: 1;
    padding: 0 \${theme.spacers.xs};
  \`};
  \${({ theme, type }) =>
    type === 'footer' &&
    \`
    padding: 0 \${theme.spacers.xs};
    padding-bottom: \${theme.spacers.l};
  \`};
  \${({ type }) =>
    type === 'borderless' &&
    \`
    padding: 0px;
  \`};
  \${({ content }) =>
    content === 'left' &&
    \`
    align-items: flex-start;
  \`}
  \${({ content }) =>
    content === 'center' &&
    \
    justify-content: center;
    align-items: center;
  \`}
  \${({ content }) =>
    content === 'right' &&
    \`
    align-items: flex-end;
  \`}
\`;

export const Group: FunctionComponent<GroupProps> = ({
  /** Test id for test */
  testID,
  /** Pass children components */
  children,
  /** Specific type depending on the area it occupies on the screen, header | body | footer */
  type,
  /** Makes the content, left | right, for default content is center  */
  content = 'center',
}) => (
  <WrapperGroup testID={testID} type={type} content={content}>
    {children}
  </WrapperGroup>
);
`;

export const groupUse = `import React, { FunctionComponent } from 'react';

import { Group } from '@ui/group';
import { ScreenWrapper } from '@ui/screen-wrapper';
import { H2 } from '@ui/typography';

export const Home: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="header">
      <H2>Group header</H2>
    </Group>
    <Group type="body">
      <H2>Group body</H2>
    </Group>
    <Group type="footer">
      <H2>Group footer</H2>
    </Group>
  </ScreenWrapper>
);
`;
