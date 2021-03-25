import { atom } from 'recoil';

type LunarNivel = 1 | 2 | 3;

export const lunarNivel = atom<LunarNivel>({
  key: 'lunarNivel',
  default: 1,
});
