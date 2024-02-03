/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  TransactionsScreen,
  HomeScreen,
  AccountsScreen,
  SettingsScreen,
  AddTransactionScreen,
} from '~/presentation/screens';
import {TabBarButton} from './components/TabBarButton';
import {useTheme} from 'styled-components/native';
import {Routes} from '~/common/enums/Routes.enums';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabNavigator() {
  const {colors} = useTheme();
  return (
    <Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,

        tabBarButton: () => {
          return <TabBarButton route={route} navigation={navigation} />;
        },

        tabBarStyle: {
          backgroundColor: colors.background,
        },
      })}>
      <Screen name={Routes.Home} component={HomeScreen} />
      <Screen name={Routes.Accounts} component={AccountsScreen} options={{}} />
      <Screen name={Routes.Add} component={AddTransactionScreen} />

      <Screen name={Routes.Transactions} component={TransactionsScreen} />
      <Screen name={Routes.Settings} component={SettingsScreen} />
    </Navigator>
  );
}
