import React, { FunctionComponent } from 'react';
import { Link, useLocation } from 'react-router-dom';

import styled from '../../theme/styled-components';

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

const links = [
  {
    path: '/optimization',
    name: 'Optimization',
  },
  {
    path: '/architecture',
    name: 'Architecture',
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
    path: '/design-system',
    name: 'Design system',
  },
  {
    path: '/documentation',
    name: 'Documentation',
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
    path: '/global-state',
    name: 'Global state',
  },
  {
    path: '/aliases',
    name: 'Aliases',
  },
  {
    path: '/multi-language',
    name: 'Multi language',
  },
  {
    path: '/development-tools',
    name: 'Development tools',
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
  {
    path: '/test-driven-development',
    name: 'Test driven development',
  },
  {
    path: '/backend-for-frontend',
    name: 'Backend for frontend',
  },
  {
    path: '/ci-cd',
    name: 'CI/CD',
  },
  {
    path: '/api-gateway',
    name: 'Api gateway',
  },
  {
    path: '/universal-link',
    name: 'Universal link',
  },
  {
    path: '/deep-link',
    name: 'Deep link',
  },
  {
    path: '/push-notification',
    name: 'Push notification',
  },
  {
    path: '/code-push',
    name: 'Code push',
  },
];

export const Menu: FunctionComponent = () => {
  const { pathname } = useLocation();

  return (
    <MenuWrapper>
      <MenuContent>
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
      </MenuContent>
    </MenuWrapper>
  );
};
