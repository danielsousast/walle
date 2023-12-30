/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {MenuItem, MenuItemProps} from './MenuItem/MenuItem';
import {BaseModal} from '~/presentation/components/BaseModal/BaseModal';
import * as Styled from './ModalMenu.styles';
import {Routes} from '~/common/enums/Routes.enums';
import {AppIcon} from '../Shared/Icon';

interface MenuItem extends Omit<MenuItemProps, 'onPress'> {
  id: string;
}

const menu: MenuItem[] = [
  {
    id: '1',
    label: 'transactions',
    route: Routes.Transactions,
    icon: 'home',
  },
  {
    id: '2',
    label: 'accounts',
    route: Routes.Accounts,
    icon: 'home',
  },
  {
    id: '3',
    label: 'categories',
    route: Routes.Categories,
    icon: 'category',
  },
];

const settingsMenu: MenuItem = {
  id: '4',
  label: 'settings',
  route: Routes.Settings,
  icon: 'settings',
};

interface ModalMenuProps {
  visible: boolean;
  onClose: () => void;
}

export const ModalMenu = ({visible, onClose}: ModalMenuProps) => {
  return (
    <BaseModal visible={visible} onClose={onClose}>
      <Styled.Content>
        <Styled.CloseButton onPress={onClose}>
          <AppIcon icon="close" size={24} color="#fff" />
        </Styled.CloseButton>
        {menu.map(item => (
          <MenuItem onPress={onClose} key={item.id} {...item} />
        ))}
        <Styled.Separator />
        <MenuItem onPress={onClose} {...settingsMenu} />
      </Styled.Content>
    </BaseModal>
  );
};
