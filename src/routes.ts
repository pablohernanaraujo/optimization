import { Home } from './pages/home';
import { Architecture } from './pages/architecture';
import { Prettier } from './pages/prettier';
import { Eslint } from './pages/eslint';
import { Lunar } from './pages/lunar';

const Routes = [
  {
    path: '/optimization',
    component: Home,
    exact: true,
  },
  {
    path: '/architecture',
    component: Architecture,
    exact: true,
  },
  {
    path: '/prettier',
    component: Prettier,
    exact: true,
  },
  {
    path: '/eslint',
    component: Eslint,
    exact: true,
  },
  {
    path: '/lunar',
    component: Lunar,
    exact: true,
  },
];

export default Routes;
