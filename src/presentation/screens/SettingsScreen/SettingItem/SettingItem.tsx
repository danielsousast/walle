import React from 'react';

import * as Styled from './SettingItem.styles';
import {SvgIcon, SvgIconName} from '~/presentation/components/SvgIcon';
import {useTheme} from 'styled-components/native';
import {translate} from '~/common/locales';
import {Label} from '~/presentation/components';
import {Switch} from 'react-native';

export type SettingItemProps = {
  label: string;
  icon: SvgIconName;
  onPress: () => void;
  switchValue?: boolean;
  onSwitchChange?: (value: boolean) => void;
};

export function SettingItem({
  label,
  icon,
  onPress,
  switchValue,
  onSwitchChange,
}: SettingItemProps) {
  const {colors} = useTheme();

  return (
    <Styled.MenuButton onPress={onPress}>
      <SvgIcon name={icon} size={20} color={colors.text} />
      <Label
        style={{
          marginLeft: 16,
        }}>
        {translate(label as any)}
      </Label>
      {onSwitchChange && (
        <Switch
          style={{
            position: 'absolute',
            right: 16,
            transform: [{scaleX: 0.8}, {scaleY: 0.8}],
          }}
          value={switchValue}
          onValueChange={onSwitchChange}
        />
      )}
    </Styled.MenuButton>
  );
}
