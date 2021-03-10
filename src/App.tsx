import React, { FunctionComponent, useEffect } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { isAuth, user } from './store';
import ThemeProvider from './theme/context';
import { GlobalStyling } from './theme/global-styling';
import { Header } from './ui/header';
import { Menu } from './ui/menu';
import { auth, database } from './firebase';

import { Login } from './pages/login';
import { Home } from './pages/home';
import { Architecture } from './pages/architecture';
import { Prettier } from './pages/prettier';
import { Lunar } from './pages/lunar';
import { NotFound } from './pages/not-found';

const PrivateRoute: FunctionComponent<{ path: string }> = ({
  children,
  ...rest
}) => {
  const isAuthStore = useRecoilValue(isAuth);

  return (
    <Route
      {...rest}
      render={() => {
        return isAuthStore ? children : <Redirect to="/" />;
      }}
    />
  );
};

export const App: FunctionComponent = () => {
  const setIsAuthStore = useSetRecoilState(isAuth);
  const setUserData = useSetRecoilState(user);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const getUser = database.ref('users');
        getUser.child(user?.uid).on('value', (snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setIsAuthStore(true);
            setUserData(userData);
          } else {
            console.log('No data available');
          }
        });
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setIsAuthStore, setUserData]);

  return (
    <>
      <ThemeProvider>
        <GlobalStyling />
        <Header />
        <Menu />
        <Switch>
          <Route path="/" exact>
            <Login />
          </Route>
          <PrivateRoute path="/optimization">
            <Home />
          </PrivateRoute>
          <PrivateRoute path="/architecture">
            <Architecture />
          </PrivateRoute>
          <PrivateRoute path="/prettier">
            <Prettier />
          </PrivateRoute>
          <PrivateRoute path="/lunar">
            <Lunar />
          </PrivateRoute>
          <Route component={NotFound} />
        </Switch>
      </ThemeProvider>
    </>
  );
};
