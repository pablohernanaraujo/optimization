import { atom } from 'recoil';

export type RolAccess = {
  path: string;
  name: string;
}[];

export const rolAccess = atom<RolAccess>({
  key: 'rolAccess',
  default: [],
});
