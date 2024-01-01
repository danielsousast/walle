import React from 'react';
import {translate} from '~/common/locales';
import {Screen} from '~/presentation/components/Screen/Screen';
import {SettingItem} from './SettingItem/SettingItem';
import {useAppSettings} from '~/presentation/hooks/useAppSettings';

export function SettingsScreen() {
  const {theme, toggleTheme} = useAppSettings();
  return (
    <Screen title={translate('settings')}>
      <SettingItem
        label={translate('appTheme')}
        icon="category"
        onPress={() => {}}
        switchValue={theme === 'dark'}
        onSwitchChange={toggleTheme}
      />
      <SettingItem
        label={translate('cleanHistory')}
        icon="category"
        onPress={() => {}}
      />
    </Screen>
  );
}
