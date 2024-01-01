import {Storage} from '~/infra/cache/Storage';
import {create} from 'zustand';

import {persist} from 'zustand/middleware';

type ThemeStatus = 'dark' | 'light';

interface State {
  theme: ThemeStatus;
  toggleTheme: () => void;
}

export const useAppSettings = create<State>()(
  persist(
    set => ({
      theme: 'light',
      toggleTheme: () => {
        set(state => {
          const newTheme = state.theme === 'light' ? 'dark' : 'light';
          return {theme: newTheme};
        });
      },
    }),
    {
      name: 'app-settings',
      storage: Storage,
    },
  ),
);
