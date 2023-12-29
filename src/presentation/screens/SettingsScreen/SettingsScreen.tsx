/* eslint-disable react-native/no-inline-styles */
import React from 'react';

import {
  DefaultContainer,
  DefaultContent,
  Header,
} from '~/presentation/components';
import {MenuItem, MenuItemProps} from './MenuItem/MenuItem';

interface MenuItem extends Omit<MenuItemProps, 'onPress'> {
  id: string;
}

const menu: MenuItem[] = [
  {
    id: '1',
    label: 'Accounts',
    route: 'Accounts',
    icon: 'home',
  },
  {
    id: '2',
    label: 'Categories',
    route: 'Categories',
    icon: 'category',
  },
  {
    id: '3',
    label: 'About this app',
    route: 'about',
    icon: 'settings',
  },
];

export const SettingsScreen = () => {
  return (
    <DefaultContainer invert>
      <Header title="Settings" />
      <DefaultContent
        style={{
          paddingTop: 24,
        }}>
        {menu.map(item => (
          <MenuItem {...item} onPress={() => {}} />
        ))}
      </DefaultContent>
    </DefaultContainer>
  );
};
