import { atom } from 'recoil';

export type User =
  | {
      email: string;
      lastname: string;
      name: string;
      role: string;
    }
  | undefined;

export const user = atom<User>({
  key: 'user',
  default: undefined,
});
