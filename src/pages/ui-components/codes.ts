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

export const spacer = `import React, { FunctionComponent } from 'react';

import { KeySizes } from '../../theme/spacers';
import styled from '../../theme/styled-components';

const SpacerWrapper = styled.div<{ size?: KeySizes }>\`
  height: \${({ size, theme }) =>
    size ? theme.spacers[size] : theme.spacers.m};
\`;

export const Spacer: FunctionComponent<{ size?: KeySizes }> = ({
  /** Sizes height to separate components */
  size,
}) => <SpacerWrapper size={size} />;
`;

export const spacerUse = `import React, { FunctionComponent } from 'react';

import { Group } from '@ui/group';
import { ScreenWrapper } from '@ui/screen-wrapper';
import { Spacer } from '@ui/spacer';
import { H2 } from '@ui/typography';

export const Home: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="body">
      <H2>Size xl</H2>
      <Spacer size="xl" />
      <H2>Size l</H2>
      <Spacer size="l" />
      <H2>Size m</H2>
      <Spacer />
      <H2>Size s</H2>
      <Spacer size="s" />
      <H2>Size xs</H2>
      <Spacer size="xs" />
      <H2>footer</H2>
    </Group>
  </ScreenWrapper>
);
`;

export const iconSvg = `import React, { FunctionComponent, useContext } from 'react';
import { Svg, Path } from 'react-native-svg';

import styled, { ThemeContext } from '@theme/styled-components';
import { IconsSvgProps } from './types';

const normalSize = {
  width: 48,
  height: 48,
};

const Box = styled.View\`
  width: 48px;
  height: 48px;
\`;

export const ArrowLeft: FunctionComponent<IconsSvgProps> = ({
  scale,
  color,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <Box>
      <Svg
        viewBox="0 0 24 24"
        fill={color ? theme.colors[color] : theme.colors.text}
        width={normalSize.width * scale}
        height={normalSize.height * scale}
      >
        <Path d="M0 0h24v24H0V0z" fill="none" />
        <Path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z" />
      </Svg>
    </Box>
  );
};
`;

export const iconSvgTypes = `export type IconId =
| 'UNKNOWN'
| 'ARROW_LEFT'
`;

export const icon = `import React, { FunctionComponent } from 'react';

import { KeyColors } from '@theme/colors';
import {
  ArrowLeft,
} from './icons-svg';
import { IconsSvgProps } from './icons-svg/types';
import { IconId } from './types';

interface IconProps {
  iconId: IconId;
  scale?: number;
  color?: KeyColors;
}

const ICONS_SVG: {
  [key in IconId]: FunctionComponent<IconsSvgProps>;
} = {
  UNKNOWN: ArrowLeft,
  ARROW_LEFT: ArrowLeft,
};

export const Icon: FunctionComponent<IconProps> = ({
  iconId,
  scale = 1,
  color,
}) => {
  if (!iconId) {
    return null;
  }

  const IconComponent = ICONS_SVG[iconId] || ICONS_SVG.UNKNOWN;

  return <IconComponent scale={scale} color={color} />;
};
`;

export const iconUse = `import React, { FunctionComponent } from 'react';

import { Group } from '@ui/group';
import { Icon } from '@ui/icons';
import { ScreenWrapper } from '@ui/screen-wrapper';
import { Spacer } from '@ui/spacer';
import { H2 } from '@ui/typography';

export const Home: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="body">
      <H2>Default</H2>
      <Icon iconId="ARROW_LEFT" />
      <Spacer />
      <H2>With scale</H2>
      <Icon iconId="ARROW_LEFT" scale={0.8} />
      <Spacer />
      <H2>With color</H2>
      <Icon iconId="ARROW_LEFT" color="danger" />
    </Group>
  </ScreenWrapper>
);
`;

export const buttonBase = `import { TouchableOpacityProps } from 'react-native';

import { KeyColors } from '@theme/colors';
import styled from '@theme/styled-components';

export const WrapperButton = styled.View<
  Pick<TouchableOpacityProps, 'disabled'>
>\`
  background-color: \${({ theme }) => theme.colors.darkBackground};
  height: 45px;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  border-radius: 2px;
  border-top-color: \${({ theme }) => theme.colors.priorityHigh};
  border-top-width: 4px;
  padding-bottom: 2px;
  \${({ disabled, theme }) =>
    disabled &&
    \`
    opacity: \${theme.emphasis.low};
  \`};
\`;

export interface TextButtonProps {
  color?: KeyColors;
}

export const TextButton = styled.Text<TextButtonProps>\`
  font-size: \${({ theme }) => theme.text.fontSize.s};
  color: \${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.white};
  opacity: \${({ theme }) => theme.emphasis.high};
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 0.21px;
  font-family: 'BwModelica-Bold';
\`;

export const TouchableOpacity = styled.TouchableOpacity\`
  width: 100%;
\`;
`;

export const buttonRegular = `import React, { FunctionComponent, useContext } from 'react';
import {
  ViewProps,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

import { KeyColors } from '@theme/colors';
import styled, { ThemeContext } from '@theme/styled-components';
import {
  WrapperButton,
  TextButton,
  TouchableOpacity,
  TextButtonProps,
} from './base';

const Wrapper = styled(WrapperButton)<{ color?: KeyColors }>\`
  \${({ theme, color }) =>
    color &&
    \`
    background-color: \${theme.colors[color]};
  \`}
\`;

type ButtonRegularType = Pick<ViewProps, 'testID'>;

interface ButtonRegularProps
  extends ButtonRegularType,
    Pick<TouchableOpacityProps, 'accessibilityLabel' | 'disabled'>,
    TextButtonProps {
  text: string;
  onActionHandle: () => void;
  loading?: boolean;
  backgroundColor?: KeyColors;
}

export const ButtonRegular: FunctionComponent<ButtonRegularProps> = ({
  /** Test id for test */
  testID,
  /** Text to be displayed inside button. */
  text,
  /** Action function. */
  onActionHandle,
  /** VoiceOver know what element they have selected */
  accessibilityLabel,
  /** Toucheable disabled */
  disabled,
  /** If true, disable all interactions for this component and replace the title with an ActivityIndicator. */
  loading,
  /** Background color */
  backgroundColor,
  /** Text color */
  color,
}) => {
  const theme = useContext(ThemeContext);

  return (
    <TouchableOpacity
      testID={testID}
      onPress={onActionHandle}
      accessibilityLabel={accessibilityLabel}
      disabled={disabled || loading}
    >
      <Wrapper disabled={disabled} color={backgroundColor}>
        {loading ? (
          <ActivityIndicator color={theme.colors.white} />
        ) : (
          <TextButton color={color}>{text}</TextButton>
        )}
      </Wrapper>
    </TouchableOpacity>
  );
};
`;

export const buttonLink = `import React, { FunctionComponent } from 'react';
import {
  ViewProps,
  TouchableOpacityProps,
  ActivityIndicator,
} from 'react-native';

import styled from '@theme/styled-components';
import {
  WrapperButton,
  TextButton,
  TouchableOpacity,
  TextButtonProps,
} from './base';

const Wrapper = styled(WrapperButton)\`
  background-color: transparent;
  border-top-color: transparent;
\`;

type ButtonLinkType = Pick<ViewProps, 'testID'>;

interface ButtonLinkProps
  extends ButtonLinkType,
    Pick<TouchableOpacityProps, 'accessibilityLabel' | 'disabled'>,
    TextButtonProps {
  text: string;
  onActionHandle: () => void;
  loading?: boolean;
}

export const ButtonLink: FunctionComponent<ButtonLinkProps> = ({
  /** Test id for test */
  testID,
  /** Text to be displayed inside button. */
  text,
  /** Action function. */
  onActionHandle,
  /** VoiceOver know what element they have selected */
  accessibilityLabel,
  /** Toucheable disabled */
  disabled,
  /** If true, disable all interactions for this component and replace the title with an ActivityIndicator. */
  loading,
  /** Text color */
  color,
}) => (
  <TouchableOpacity
    testID={testID}
    onPress={onActionHandle}
    accessibilityLabel={accessibilityLabel}
    disabled={disabled || loading}
  >
    <Wrapper disabled={disabled}>
      {loading ? (
        <ActivityIndicator />
      ) : (
        <TextButton color={color}>{text}</TextButton>
      )}
    </Wrapper>
  </TouchableOpacity>
);
`;

export const buttonUse = `import React, { FunctionComponent } from 'react';

import { ButtonRegular, ButtonLink } from '@ui/buttons';
import { Group } from '@ui/group';
import { ScreenWrapper } from '@ui/screen-wrapper';
import { Spacer } from '@ui/spacer';
import { H2 } from '@ui/typography';

export const Home: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="body">
      <H2>ButtonRegular</H2>
      <Spacer />
      <ButtonRegular text="Button" onActionHandle={() => null} />
      <Spacer />
      <H2>ButtonLink</H2>
      <Spacer />
      <ButtonLink color="black" text="Button" onActionHandle={() => null} />
    </Group>
  </ScreenWrapper>
);
`;

export const typographyBase = `import React, { FunctionComponent } from 'react';
import { ViewProps, TextStyle } from 'react-native';

import { KeyColors } from '@theme/colors';
import { KeyEmphasis } from '@theme/emphasis';
import styled from '@theme/styled-components';
import { KeyFontSize, KeyFontWeight } from '@theme/text';

type FontsType =
  | 'BwModelica-Black'
  | 'BwModelica-BlackItalic'
  | 'BwModelica-Bold'
  | 'BwModelica-BoldItalic'
  | 'BwModelica-ExtraBold'
  | 'BwModelica-ExtraBoldItalic'
  | 'BwModelica-Hairline'
  | 'BwModelica-HairlineItalic'
  | 'BwModelica-Light'
  | 'BwModelica-LightItalic'
  | 'BwModelica-Medium'
  | 'BwModelica-MediumItalic'
  | 'BwModelica-Regular'
  | 'BwModelica-RegularItalic'
  | 'BwModelica-Thin'
  | 'BwModelica-ThinItalic';

type TextType = Pick<ViewProps, 'testID'>;

export interface TextProps extends TextType, Pick<TextStyle, 'textAlign'> {
  color?: KeyColors;
  size?: KeyFontSize;
  weight?: KeyFontWeight;
  emphasis?: KeyEmphasis;
  numberOfLines?: number;
}

const setWeight = (weight: KeyFontWeight): FontsType =>
  \`BwModelica-\${weight}\` as FontsType;

export const TextDefault = styled.Text<TextProps>\`
  color: \${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.text};
  font-size: \${({ theme, size }) =>
    size ? theme.text.fontSize[size] : theme.text.fontSize.m};
  opacity: \${({ theme, emphasis }) =>
    emphasis ? theme.emphasis[emphasis] : theme.emphasis.high};
  text-align: \${({ textAlign }) => textAlign || 'center'};
  font-family: \${({ theme, weight }) =>
    weight
      ? setWeight(theme.text.fontWeight[weight] as KeyFontWeight)
      : 'BwModelica-Regular'};
\`;

export const Text: FunctionComponent<TextProps> = ({
  /** Test id for test */
  testID,
  /** Text */
  children,
  /** Text color */
  color,
  /** Font size */
  size,
  /** Text font weight */
  weight,
  /** Text font opacity */
  emphasis,
  /** Text align left center or right */
  textAlign,
  /** Number of line to truncate text */
  numberOfLines,
}) => (
  <TextDefault
    testID={testID}
    color={color}
    size={size}
    weight={weight}
    emphasis={emphasis}
    textAlign={textAlign}
    numberOfLines={numberOfLines || 0}
  >
    {children}
  </TextDefault>
);
`;

export const h1 = `import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const H1: FunctionComponent<TextProps> = ({
  /** Test id for test */
  testID = 'H1',
  /** Text */
  children,
  /** Text color */
  color,
  /** Text font opacity */
  emphasis,
  /** Text align */
  textAlign,
}) => (
  <Text
    testID={testID}
    color={color}
    size="xxl"
    weight="bold"
    emphasis={emphasis}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
`;

export const h2 = `import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const H2: FunctionComponent<
  Pick<TextProps, 'testID' | 'color' | 'emphasis' | 'textAlign'>
> = ({
  /** Test id for test */
  testID = 'H2',
  /** Text */
  children,
  /** Text color */
  color,
  /** Text font opacity */
  emphasis,
  /** Text align */
  textAlign,
}) => (
  <Text
    testID={testID}
    color={color}
    size="xl"
    weight="bold"
    emphasis={emphasis}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
`;

export const h3 = `import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const H3: FunctionComponent<TextProps> = ({
  /** Test id for test */
  testID = 'H3',
  /** Text */
  children,
  /** Text color */
  color,
  /** Text font opacity */
  emphasis,
  /** Text align */
  textAlign,
}) => (
  <Text
    testID={testID}
    color={color}
    size="l"
    weight="medium"
    emphasis={emphasis}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
`;

export const h4 = `import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const H4: FunctionComponent<
  Pick<TextProps, 'testID' | 'color' | 'emphasis' | 'textAlign'>
> = ({
  /** Test id for test */
  testID,
  /** Text */
  children,
  /** Text color */
  color,
  /** Text font opacity */
  emphasis,
  /** Text align */
  textAlign,
}) => (
  <Text
    testID={testID}
    color={color}
    size="m"
    weight="regular"
    emphasis={emphasis}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
`;

export const h5 = `import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const H5: FunctionComponent<TextProps> = ({
  /** Test id for test */
  testID = 'H5',
  /** Text */
  children,
  /** Text color */
  color,
  /** Text font weight */
  weight,
  /** Text font opacity */
  emphasis,
  /** Text align */
  textAlign,
}) => (
  <Text
    testID={testID}
    color={color}
    size="s"
    weight={weight}
    emphasis={emphasis}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
`;

export const body1 = `import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const Body1: FunctionComponent<
  Pick<
    TextProps,
    'testID' | 'color' | 'emphasis' | 'textAlign' | 'numberOfLines'
  >
> = ({
  /** Test id for test */
  testID = 'Body1',
  /** Text */
  children,
  /** Text color */
  color,
  /** Text font opacity */
  emphasis,
  /** Text align */
  textAlign,
  /** Number of line to truncate text */
  numberOfLines,
}) => (
  <Text
    testID={testID}
    color={color}
    size="s"
    weight="light"
    emphasis={emphasis}
    textAlign={textAlign}
    numberOfLines={numberOfLines}
  >
    {children}
  </Text>
);
`;

export const body2 = `import React, { FunctionComponent } from 'react';

import { Text, TextProps } from './base';

export const Body2: FunctionComponent<
  Pick<TextProps, 'testID' | 'color' | 'emphasis' | 'textAlign'>
> = ({
  /** Test id for test */
  testID,
  /** Text */
  children,
  /** Text color */
  color,
  /** Text font opacity */
  emphasis,
  /** Text align */
  textAlign,
}) => (
  <Text
    testID={testID}
    color={color}
    size="xs"
    weight="regular"
    emphasis={emphasis}
    textAlign={textAlign}
  >
    {children}
  </Text>
);
`;

export const typographyUse = `import React, { FunctionComponent } from 'react';

import { Group } from '@ui/group';
import { ScreenWrapper } from '@ui/screen-wrapper';
import { Spacer } from '@ui/spacer';
import { H1, H2, H3, H4, H5, Body1, Body2 } from '@ui/typography';

export const Home: FunctionComponent = () => (
  <ScreenWrapper>
    <Group type="body">
      <H1>H1 text</H1>
      <Spacer />
      <H2 color="primary">H2 text</H2>
      <Spacer />
      <H3 emphasis="low">H3 text</H3>
      <Spacer />
      <H4>H4 text</H4>
      <Spacer />
      <H5>H5 text</H5>
      <Spacer />
      <Body1>Body1 text</Body1>
      <Spacer />
      <Body2>Body2 text</Body2>
    </Group>
  </ScreenWrapper>
);
`;
