import { atom } from 'recoil';

type IsAuth = boolean;

export const isAuth = atom<IsAuth>({
  key: 'isAuth',
  default: false,
});
