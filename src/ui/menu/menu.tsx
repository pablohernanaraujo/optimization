import React, { FunctionComponent, useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { user } from '../../store';
import styled from '../../theme/styled-components';
import { database } from '../../firebase';
import { Loader } from '../../ui/loader';

const MenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  overflow-y: scroll;
  height: calc(100vh - 90px);
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

const unloggedLinks = [
  {
    path: '/',
    name: 'Login',
  },
  {
    path: '/register',
    name: 'Register',
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
    <MenuWrapper>
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
              <MenuItem key={link.path} to={link.path}>
                {link.name}
              </MenuItem>
            );
          })
        )}
      </MenuContent>
    </MenuWrapper>
  );
};
