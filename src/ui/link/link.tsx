import React, { FunctionComponent } from 'react';

import styled from '../../theme/styled-components';

const A = styled.a`
  color: ${({ theme }) => theme.colors.primary};
`;

type targetType = '_self' | '_blank' | '_parent' | '_top';

interface LinkProps {
  href: string;
  target: targetType;
}

export const Link: FunctionComponent<LinkProps> = ({
  children,
  href,
  target,
}) => (
  <A href={href} target={target} rel="noreferrer">
    {children}
  </A>
);
