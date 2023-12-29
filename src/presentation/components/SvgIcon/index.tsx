import React from 'react';
import {CategoryIcon} from './CategoryIcon';
import {HomeIcon} from './HomeIcon';
import {SettingsIcon} from './SettingsIcon';
import {TransactionsIcon} from './TransactionsIcon';

const Icons = {
  category: CategoryIcon,
  home: HomeIcon,
  settings: SettingsIcon,
  transactions: TransactionsIcon,
};

export type SvgIconName = keyof typeof Icons;

interface Props {
  name: SvgIconName;
  size?: number;
  color?: string;
}

export function SvgIcon({name, size, color}: Props) {
  const Icon = Icons[name];
  return <Icon size={size} color={color} />;
}
