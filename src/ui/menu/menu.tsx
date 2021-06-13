import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue, useRecoilState } from 'recoil';
import { isMobile } from 'react-device-detect';

import { user, showMenu } from '../../store';
import styled from '../../theme/styled-components';
import { database } from '../../firebase';
import { Loader } from '../../ui/loader';

const MenuWrapper = styled.div<{ isShowMenu: boolean }>`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  overflow-y: scroll;
  height: calc(100vh - 90px);
  ${({ theme, isShowMenu }) =>
    theme.isMobile &&
    `
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    z-index: 10;
    height: auto;
    display: ${isShowMenu ? 'block' : 'none'};
  `};
`;

const MenuContent = styled.div`
  padding: ${({ theme }) => theme.spacers.m};
`;

const MenuItem = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.spacers.xs} 0px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
  font-weight: 100;
`;

const MenuItemCurrent = styled(MenuItem)`
  color: ${({ theme }) => theme.colors.primary};
  font-weight: 300;
`;

const Icon = styled.img`
  width: 36px;
  position: absolute;
  top: ${({ theme }) => theme.spacers.m};
  right: ${({ theme }) => theme.spacers.m};
`;

const unloggedLinks = [
  {
    path: '/',
    name: 'Login',
  },
  {
    path: '/register',
    name: 'Register',
  },
  {
    path: '/curriculum-vitae',
    name: 'Curriculum vitae',
  },
];

interface MenuList {
  path: string;
  name: string;
}

export const Menu: FunctionComponent = () => {
  const [loading, setLoading] = useState(false);
  const [menuList, setMenuList] = useState<MenuList[]>(unloggedLinks);
  const { pathname } = useLocation();
  const userData = useRecoilValue(user);
  const [isShowMenu, setIsShowMenu] = useRecoilState(showMenu);

  useEffect(() => {
    if (userData) {
      setLoading(true);
      const getRoll = database.ref('roles/' + userData.role);
      getRoll.on('value', (snap) => {
        const accessLinks = snap.val();
        if (accessLinks) {
          const linksList: MenuList[] = [];
          Object.entries(accessLinks).forEach(([key, value]) => {
            if (key === 'Optimization') {
              linksList.unshift({
                path: value as string,
                name: key,
              });
            } else {
              linksList.push({
                path: value as string,
                name: key,
              });
            }
          });
          setMenuList(linksList);
        }
        setLoading(false);
      });
    } else {
      setMenuList(unloggedLinks);
    }
  }, [userData]);

  return (
    <MenuWrapper isShowMenu={isShowMenu}>
      {isMobile && (
        <Icon
          src="./images/svg/clear-black-48dp.svg"
          onClick={() => setIsShowMenu(false)}
        />
      )}
      <MenuContent>
        {loading ? (
          <Loader />
        ) : (
          menuList.map((link) => {
            if (link.path === pathname) {
              return (
                <MenuItemCurrent key={link.path} to={link.path}>
                  {link.name}
                </MenuItemCurrent>
              );
            }

            return (
              <MenuItem
                key={link.path}
                to={link.path}
                onClick={() => (isMobile ? setIsShowMenu(false) : null)}
              >
                {link.name}
              </MenuItem>
            );
          })
        )}
      </MenuContent>
    </MenuWrapper>
  );
};
