import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AccountsScreen,
  AddTransactionScreen,
  CategoriesScreen,
  SettingsScreen,
} from '~/presentation/screens';
import {TabNavigator} from './tab';
import {Routes} from '~/common/enums/Routes.enums';

const {Navigator, Screen} = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name={Routes.HomeTab} component={TabNavigator} />
      <Screen name={Routes.Accounts} component={AccountsScreen} />
      <Screen name={Routes.Categories} component={CategoriesScreen} />
      <Screen name={Routes.Settings} component={SettingsScreen} />
      <Screen
        name={Routes.AddTransaction}
        component={AddTransactionScreen}
        options={{
          presentation: 'modal',
          headerShown: false,
        }}
      />
    </Navigator>
  );
}
