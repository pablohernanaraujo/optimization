export const screen = `Splash
Onboarding
- Home
- - Signup
- - - Terms & conditions (data privacy)
- - - Register
- - - Current cycle
- - Signin
- - - Login
Dashboard
- Phases
- - Elements
- - - Element
- - Menstrual status
- - Write a note
- - Register my statuses
- Notes
- - Write a note
- Calendar
- - Menstrual status
- Shop
- - Show shops
- Profile
- - Account
- - - Current cycle
- - Library
- - - Phases and elements
- - Glossary
- - About
- - Terms & conditions
- - Data privacy
- - Report bug
- - Socials
Force update
`;

export const app = `import React, { FunctionComponent } from 'react';

import { SplashManager } from './splash-manager';
import { RootNavigator } from './routing';

export const App: FunctionComponent = () => (
  <>
    <SplashManager />
    <RootNavigator />
  </>
);
`;

export const splashManager = `import { useState, useEffect, useCallback } from 'react';
import SplashScreen from 'react-native-splash-screen';

import sessionStore from '../session-store';

const useSplashManager = (): void => {
  const [loadingStore, setLoadingStore] = useState(true);

  useEffect(() => {
    async function store(): Promise<void> {
      const session = await sessionStore.get();
      
      if (session) {
        setLoadingStore(false)
      }
    }
    store();
  }, []);


  useEffect(() => {
    if (!loadingStore) {
      SplashScreen.hide();
    }
  }, [loadingStore]);
};

export const SplashManager = (): null => {
  useSplashManager();

  return null;
};
`;

export const folders = `src
/ core
  / api-hooks
  / async-storage
  / axios
  / config
  / splash-manager
/ routing
  / commons
  / stacks
    / logged
      / dashboard
      / kyc
    / unlogged
/ screens
  / commons
  / force-update
  / logged
  / unlogged
/ store
/ theme
/ ui
`;
