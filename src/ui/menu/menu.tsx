import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styled from '../../theme/styled-components';

const MenuWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.lightBackground};
  padding: ${({ theme }) => theme.spacers.m};
`;

const MenuItem = styled(Link)`
  display: block;
  padding: ${({ theme }) => theme.spacers.xs} 0px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text};
`;

const MenuItemCurrent = styled(MenuItem)`
  color: ${({ theme }) => theme.colors.primary};
`;

const links = [
  {
    path: '/',
    name: 'Inicio',
  },
  {
    path: '/folder',
    name: 'Folder',
  },
  {
    path: '/typescript',
    name: 'Typescript',
  },
  {
    path: '/hooks',
    name: 'Hooks',
  },
  {
    path: '/styled-components',
    name: 'Styled components',
  },
  {
    path: '/react-router-dom',
    name: 'React router dom',
  },
  {
    path: '/react-navigation',
    name: 'React navigation',
  },
  {
    path: '/prettier',
    name: 'Prettier',
  },
  {
    path: '/eslint',
    name: 'Eslint',
  },
  {
    path: '/jest',
    name: 'Jest',
  },
  {
    path: '/react-testing-library',
    name: 'React testing library',
  },
  {
    path: '/cypress',
    name: 'Cypress',
  },
  {
    path: '/detox',
    name: 'Detox',
  },
];

export const Menu: FunctionComponent = () => {
  const { pathname } = useLocation();

  return (
    <MenuWrapper>
      {links.map((link) => {
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
      })}
    </MenuWrapper>
  );
};
