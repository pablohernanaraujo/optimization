import { Home } from './pages/home';
import { Architecture } from './pages/architecture';
import { Prettier } from './pages/prettier';
import { Eslint } from './pages/eslint';

const Routes = [
  {
    path: '/optimization/',
    component: Home,
    exact: true,
  },
  {
    path: '/optimization/architecture/',
    component: Architecture,
    exact: true,
  },
  {
    path: '/optimization/prettier/',
    component: Prettier,
    exact: true,
  },
  {
    path: '/optimization/eslint/',
    component: Eslint,
    exact: true,
  },
];

export default Routes;
