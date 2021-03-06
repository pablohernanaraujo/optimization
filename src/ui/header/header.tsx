import React, { FunctionComponent, useCallback } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { isMobile } from 'react-device-detect';

import { isAuth, user, showMenu } from '../../store';
import styled from '../../theme/styled-components';
import { auth } from '../../firebase';
import { H4 } from '../../ui/typography';

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

const ContentRightWrpper = styled.div`
  display: flex;
  align-items: center;
`;

const NameWrapper = styled.div`
  margin-right: ${({ theme }) => theme.spacers.s};
`;

const Button = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  padding: ${({ theme }) => theme.spacers.xs} ${({ theme }) => theme.spacers.m};
  font-size: ${({ theme }) => theme.text.fontSize.s};
  cursor: pointer;
  text-transform: uppercase;
`;

const IconWArapper = styled.div`
  width: 120px;
  display: flex;
  align-items: center;
`;

const Icon = styled.img`
  width: 36px;
  margin-right: ${({ theme }) => theme.spacers.xs};
`;

export const Header: FunctionComponent = () => {
  const [isAuthStore, setIsAuthStore] = useRecoilState(isAuth);
  const [userData, setUserData] = useRecoilState(user);
  const setShowMenu = useSetRecoilState(showMenu);

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
      {isMobile ? (
        <IconWArapper>
          <Icon
            src="./images/svg/menu-white-48dp.svg"
            onClick={() => setShowMenu(true)}
          />
          <Title>RDO</Title>
        </IconWArapper>
      ) : (
        <Title>React development optimization</Title>
      )}
      {isAuthStore && (
        <ContentRightWrpper>
          <NameWrapper>
            <H4 color="white">{userData?.name}</H4>
          </NameWrapper>
          <Button onClick={logout}>Logout</Button>
        </ContentRightWrpper>
      )}
    </HeaderWrapper>
  );
};
