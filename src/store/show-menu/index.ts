import { atom } from 'recoil';

type ShowMenu = boolean;

export const showMenu = atom<ShowMenu>({
  key: 'showMenu',
  default: false,
});
