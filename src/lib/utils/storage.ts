import type { User } from "$lib/types";

const STORAGE_PREFIX = 'svelte_app_';

const storage = {
  getToken: () => {
    const token = localStorage.getItem(`${STORAGE_PREFIX}token`);
    return token;
  },
  setToken: (token: string) => {
    localStorage.setItem(`${STORAGE_PREFIX}token`, token);
  },
  setUser: (user: User) => {
    localStorage.setItem(`${STORAGE_PREFIX}user`, JSON.stringify(user));
  },
  getUser: () => {
    const user = localStorage.getItem(`${STORAGE_PREFIX}user`);
    if (!user) return undefined;
    return JSON.parse(user) as User;
  },
  clearAuthData: () => {
    localStorage.removeItem(`${STORAGE_PREFIX}token`);
    localStorage.removeItem(`${STORAGE_PREFIX}user`);
  },
};

export default storage;
