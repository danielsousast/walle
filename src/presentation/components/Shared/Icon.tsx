import React from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

type IconProps = {
  icon: IconName;
  size?: number;
  color?: string;
};

type Props = Omit<IconProps, 'icon'>;

const icons = {
  transaction: (props: Props) => <Feather name="repeat" {...props} />,
  bank: (props: Props) => (
    <MaterialCommunityIcons name="bank-outline" {...props} />
  ),
  category: (props: Props) => <Feather name="list" {...props} />,
  income: (props: Props) => <Ionicons name="arrow-up-circle" {...props} />,
  expense: (props: Props) => <Ionicons name="arrow-down-circle" {...props} />,
  'eye-on': (props: Props) => <Ionicons name="eye-outline" {...props} />,
  'eye-off': (props: Props) => <Ionicons name="eye-off-outline" {...props} />,
  back: (props: Props) => <Ionicons name="arrow-back" {...props} />,
  down: (props: Props) => <Ionicons name="chevron-down" {...props} />,
  search: (props: Props) => <Feather name="search" {...props} />,
  close: (props: Props) => <Ionicons name="close-outline" {...props} />,
  settings: (props: Props) => <Feather name="more-vertical" {...props} />,
  edit: (props: Props) => <Feather name="edit-2" {...props} />,
  calendar: (props: Props) => <Feather name="calendar" {...props} />,
  'arrow-up': (props: Props) => <Feather name="arrow-up-circle" {...props} />,
  'arrow-down': (props: Props) => (
    <Feather name="arrow-down-circle" {...props} />
  ),
  menu: (props: Props) => <Feather name="menu" {...props} />,
};

export type IconName = keyof typeof icons;

export const AppIcon: React.FC<IconProps> = ({
  icon,
  size = 32,
  color = '#ccc',
}) => {
  const IconComponet = icons[icon];
  return <IconComponet size={size} color={color} />;
};
