import React from 'react';

import * as Styled from './MenuItem.styles';
import {SvgIcon, SvgIconName} from '~/presentation/components/SvgIcon';
import {useTheme} from 'styled-components/native';

export type MenuItemProps = {
  label: string;
  route?: string;
  icon: SvgIconName;
  onPress: () => void;
};

export function MenuItem({label, icon}: MenuItemProps) {
  const {colors} = useTheme();
  return (
    <Styled.MenuButton>
      <SvgIcon name={icon} size={20} color={colors.text} />
      <Styled.Label>{label}</Styled.Label>
    </Styled.MenuButton>
  );
}
