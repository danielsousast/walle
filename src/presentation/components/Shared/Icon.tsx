/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useMemo } from 'react';
let Feather: React.FC<VectorIconProps>;
let MaterialCommunityIcons: React.FC<VectorIconProps>;
let Ionicons: React.FC<VectorIconProps>;
//let SimpleLineIcons: React.FC<VectorIconProps>;

export type IconName =
  | 'transaction'
  | 'bank'
  | 'category'
  | 'income'
  | 'expense'
  | 'eye-on'
  | 'eye-off'
  | 'back'
  | 'down'
  | 'search'
  | 'close'
  | 'settings' | 'edit' | 'calendar';

type VectorIconProps = {
  name: string;
  size?: number;
  color?: string;
};

type IconProps = {
  icon: IconName;
  size?: number;
  color?: string;
};

const AppIcon: React.FC<IconProps> = ({ icon, size = 32, color = '#ccc' }) => {
  const iconComponent = useMemo(() => {
    if (
      icon === 'transaction' ||
      icon === 'category' ||
      icon === 'search' ||
      icon === 'settings' || icon === 'edit' || icon === 'calendar'
    ) {
      Feather = require('react-native-vector-icons/Feather').default;
    }

    if (icon === 'bank') {
      MaterialCommunityIcons =
        require('react-native-vector-icons/MaterialCommunityIcons').default;
    }

    if (
      icon === 'income' ||
      icon === 'expense' ||
      icon === 'eye-on' ||
      icon === 'eye-off' ||
      icon === 'back' ||
      icon === 'down' ||
      icon === 'close'
    ) {
      Ionicons = require('react-native-vector-icons/Ionicons').default;
    }

    switch (icon) {
      case 'transaction': {
        return <Feather name="repeat" size={size} color={color} />;
      }
      case 'bank': {
        return (
          <MaterialCommunityIcons
            name="bank-outline"
            size={size}
            color={color}
          />
        );
      }
      case 'category': {
        return <Feather name="list" size={size} color={color} />;
      }
      case 'income':
        return <Ionicons name="arrow-up-circle" size={size} color={color} />;
      case 'expense':
        return <Ionicons name="arrow-down-circle" size={size} color={color} />;
      case 'eye-on':
        return <Ionicons name="eye-outline" size={size} color={color} />;
      case 'eye-off':
        return <Ionicons name="eye-off-outline" size={size} color={color} />;
      case 'back':
        return <Ionicons name="arrow-back" size={size} color={color} />;
      case 'down':
        return <Ionicons name="chevron-down" size={size} color={color} />;
      case 'search':
        return <Feather name="search" size={size} color={color} />;
      case 'close':
        return <Ionicons name="close-outline" size={size} color={color} />;
      case 'settings':
        return <Feather name="more-vertical" size={size} color={color} />;
      case 'edit':
        return <Feather name="edit-2" size={size} color={color} />;      
      case 'calendar':
        return <Feather name="calendar" size={size} color={color} />;   
      default:
        return null;
    }
  }, [icon, color, size]);

  return iconComponent;
};

export default AppIcon;
