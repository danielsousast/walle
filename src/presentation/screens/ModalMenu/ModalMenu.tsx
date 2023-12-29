/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {MenuItem, MenuItemProps} from './MenuItem/MenuItem';
import {BaseModal} from '~/presentation/components/BaseModal/BaseModal';
import * as Styled from './ModalMenu.styles';

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
];

interface ModalMenuProps {
  visible: boolean;
  onClose: () => void;
}

export const ModalMenu = ({visible, onClose}: ModalMenuProps) => {
  return (
    <BaseModal visible={visible} onClose={onClose}>
      <Styled.Content>
        {menu.map(item => (
          <MenuItem key={item.id} {...item} onPress={() => {}} />
        ))}
      </Styled.Content>
    </BaseModal>
  );
};
