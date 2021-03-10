import React, { FunctionComponent, useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';

import { isAuth, user } from '../../store';
import styled from '../../theme/styled-components';
import { auth } from '../../firebase';

const HeaderWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.darkBackground};
  padding: ${({ theme }) => theme.spacers.m};
  grid-column: 1 / span 3;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  color: ${({ theme }) => theme.colors.primary};
  opacity: ${({ theme }) => theme.emphasis.high};
  margin: 0px;
  font-weight: 500;
`;

const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacers.xs} ${({ theme }) => theme.spacers.m};
  font-size: ${({ theme }) => theme.text.fontSize.s};
  cursor: pointer;
  text-transform: uppercase;
`;

export const Header: FunctionComponent = () => {
  const [isAuthStore, setIsAuthStore] = useRecoilState(isAuth);
  const setUserData = useSetRecoilState(user);

  const logout = useCallback(() => {
    auth
      .signOut()
      .then(() => {
        setIsAuthStore(false);
        setUserData(undefined);
      })
      .catch((error) => {
        console.log('Error', error);
      });
  }, [setIsAuthStore, setUserData]);

  return (
    <HeaderWrapper>
      <Title>React development optimization</Title>
      {isAuthStore && <Button onClick={logout}>Logout</Button>}
    </HeaderWrapper>
  );
};
