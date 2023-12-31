import React from 'react';

import * as Styled from './MenuItem.styles';
import {SvgIcon, SvgIconName} from '~/presentation/components/SvgIcon';
import {useTheme} from 'styled-components/native';
import {useNavigation} from '@react-navigation/native';
import {translate} from '~/common/locales';
import {Label} from '../../Shared/Typography';

export type MenuItemProps = {
  label: string;
  route?: string;
  icon: SvgIconName;
  onPress: () => void;
};

export function MenuItem({label, icon, route, onPress}: MenuItemProps) {
  const {colors} = useTheme();
  const {navigate} = useNavigation<any>();

  function handlePress() {
    onPress && onPress();
    route && navigate(route);
  }
  return (
    <Styled.MenuButton onPress={handlePress}>
      <SvgIcon name={icon} size={20} color={colors.text} />
      <Label style={{marginLeft: 12}}>{translate(label as any)}</Label>
    </Styled.MenuButton>
  );
}
