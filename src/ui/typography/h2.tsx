import React, { FunctionComponent } from 'react';

import { KeyColors } from '../../theme/colors';
import { KeyEmphasis } from '../../theme/emphasis';
import styled from '../../theme/styled-components';

const Text = styled.h2<{ color?: KeyColors; emphasis?: KeyEmphasis }>`
  color: ${({ theme, color }) =>
    color ? theme.colors[color] : theme.colors.text};
  opacity: ${({ theme, emphasis }) =>
    emphasis ? theme.emphasis[emphasis] : theme.emphasis.high};
  font-weight: 400;
`;

export const H2: FunctionComponent<{
  color?: KeyColors;
  emphasis?: KeyEmphasis;
}> = ({ children, color, emphasis }) => (
  <Text color={color} emphasis={emphasis}>
    {children}
  </Text>
);
