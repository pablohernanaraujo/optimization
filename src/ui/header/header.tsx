import React, { FunctionComponent } from 'react';

import styled from '../../theme/styled-components';

const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  padding: ${({ theme }) => theme.spacers.m};
  grid-column: 1 / span 3;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  opacity: ${({ theme }) => theme.emphasis.high};
  margin: 0px;
`;

export const Header: FunctionComponent = () => (
  <HeaderWrapper>
    <Title>React development optimization</Title>
  </HeaderWrapper>
);
