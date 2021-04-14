import React, { FunctionComponent, useState, useEffect } from 'react';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { useRecoilValue, useSetRecoilState } from 'recoil';

import { isAuth, user } from '../store';
import ThemeProvider from '../theme/context';
import { GlobalStyling } from '../theme/global-styling';
import { Header } from '../ui/header';
import { Menu } from '../ui/menu';
import { FullScreenLoaderWrapper, Loader } from '../ui/loader';
import { auth, database } from '../firebase';

import { Login } from '../pages/onboarding/login';
import { Register } from '../pages/onboarding/register';
import { Home } from '../pages/home';
import { Architecture } from '../pages/architecture';
import { Concepts } from '../pages/concepts';
import { Philosophy } from '../pages/Philosophy';
import { Prettier } from '../pages/prettier';
import { Principles } from '../pages/principles';
import { PushNotifications } from '../pages/push-notifications';
import { UiComponents } from '../pages/ui-components';
import { Lunar } from '../pages/lunar';
import { Palta } from '../pages/palta';
import { NotFound } from '../pages/not-found';

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
  const [loading, setLoading] = useState(true);
  const setIsAuthStore = useSetRecoilState(isAuth);
  const setUserData = useSetRecoilState(user);
  const history = useHistory();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        const getUser = database.ref('users');
        getUser.child(user?.uid).on('value', (snapshot) => {
          if (snapshot.exists()) {
            const userData = snapshot.val();
            setIsAuthStore(true);
            setUserData(userData);
            setLoading(false);
            history.push('/optimization');
          } else {
            console.log('No data available');
            auth
              .signOut()
              .then(() => {
                setIsAuthStore(false);
                setUserData(undefined);
                setLoading(false);
              })
              .catch((error) => {
                console.log('Error', error);
                setLoading(false);
              });
          }
        });
      } else {
        setLoading(false);
      }
    });
    return () => {
      unsubscribe();
    };
  }, [setIsAuthStore, setUserData, history]);

  return (
    <>
      <ThemeProvider>
        <GlobalStyling />
        {loading ? (
          <FullScreenLoaderWrapper>
            <Loader />
          </FullScreenLoaderWrapper>
        ) : (
          <>
            <Header />
            <Menu />
            <Switch>
              <Route path="/" exact>
                <Login />
              </Route>
              <Route path="/register" exact>
                <Register />
              </Route>
              <PrivateRoute path="/optimization">
                <Home />
              </PrivateRoute>
              <PrivateRoute path="/architecture">
                <Architecture />
              </PrivateRoute>
              <PrivateRoute path="/concepts">
                <Concepts />
              </PrivateRoute>
              <PrivateRoute path="/philosophy">
                <Philosophy />
              </PrivateRoute>
              <PrivateRoute path="/prettier">
                <Prettier />
              </PrivateRoute>
              <PrivateRoute path="/principles">
                <Principles />
              </PrivateRoute>
              <PrivateRoute path="/push-notifications">
                <PushNotifications />
              </PrivateRoute>
              <PrivateRoute path="/ui-components">
                <UiComponents />
              </PrivateRoute>
              <PrivateRoute path="/lunar">
                <Lunar />
              </PrivateRoute>
              <PrivateRoute path="/palta">
                <Palta />
              </PrivateRoute>
              <Route component={NotFound} />
            </Switch>
          </>
        )}
      </ThemeProvider>
    </>
  );
};
