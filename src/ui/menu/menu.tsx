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
    path: '/optimization/',
    name: 'Optimization',
  },
  {
    path: '/optimization/architecture/',
    name: 'Architecture',
  },
  {
    path: '/optimization/folder/',
    name: 'Folder',
  },
  {
    path: '/optimization/typescript/',
    name: 'Typescript',
  },
  {
    path: '/optimization/hooks/',
    name: 'Hooks',
  },
  {
    path: '/optimization/styled-components/',
    name: 'Styled components',
  },
  {
    path: '/optimization/design-system/',
    name: 'Design system',
  },
  {
    path: '/optimization/documentation/',
    name: 'Documentation',
  },
  {
    path: '/optimization/react-router-dom/',
    name: 'React router dom',
  },
  {
    path: '/optimization/react-navigation/',
    name: 'React navigation',
  },
  {
    path: '/optimization/global-state/',
    name: 'Global state',
  },
  {
    path: '/optimization/aliases/',
    name: 'Aliases',
  },
  {
    path: '/optimization/multi-language/',
    name: 'Multi language',
  },
  {
    path: '/optimization/development-tools/',
    name: 'Development tools',
  },
  {
    path: '/optimization/prettier/',
    name: 'Prettier',
  },
  {
    path: '/optimization/eslint/',
    name: 'Eslint',
  },
  {
    path: '/optimization/jest/',
    name: 'Jest',
  },
  {
    path: '/optimization/react-testing-library/',
    name: 'React testing library',
  },
  {
    path: '/optimization/cypress/',
    name: 'Cypress',
  },
  {
    path: '/optimization/detox/',
    name: 'Detox',
  },
  {
    path: '/optimization/test-driven-development/',
    name: 'Test driven development',
  },
  {
    path: '/optimization/backend-for-frontend/',
    name: 'Backend for frontend',
  },
  {
    path: '/optimization/ci-cd/',
    name: 'CI/CD',
  },
  {
    path: '/optimization/api-gateway/',
    name: 'Api gateway',
  },
  {
    path: '/optimization/universal-link/',
    name: 'Universal link',
  },
  {
    path: '/optimization/deep-link/',
    name: 'Deep link',
  },
  {
    path: '/optimization/push-notification/',
    name: 'Push notification',
  },
  {
    path: '/optimization/code-push/',
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
