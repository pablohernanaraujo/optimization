import React, { FunctionComponent } from 'react';
import { Switch, Route } from 'react-router-dom';

import ThemeProvider from './theme/context';
import { GlobalStyling } from './theme/global-styling';
import { Header } from './ui/header';
import { Menu } from './ui/menu';
import routes from './routes';
import { NotFound } from './pages/not-found';

export const App: FunctionComponent = () => {
  const routesMap = routes.map((route) => (
    <Route key={route.path} {...route} />
  ));

  return (
    <>
      <ThemeProvider>
        <GlobalStyling />
        <Header />
        <Menu />
        <Switch>
          {routesMap}
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </>
  );
};
