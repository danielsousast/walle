import React from 'react';
import {CategoryIcon} from './svgs/CategoryIcon';
import {HomeIcon} from './svgs/HomeIcon';
import {SettingsIcon} from './svgs/SettingsIcon';
import {TransactionsIcon} from './svgs/TransactionsIcon';

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
