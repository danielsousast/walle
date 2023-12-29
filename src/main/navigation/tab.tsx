/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  CategoriesScreen,
  SettingsScreen,
  TransactionsScreen,
  HomeScreen,
} from '~/presentation/screens';
import {FloatingButton} from '~/presentation/components';
import {TabBarButton} from './components/TabBarButton';
import {Routes} from '~/common/enums/Routes.enums';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabNavigator() {
  return (
    <Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        tabBarButton: () => {
          if (route.name === Routes.Add) {
            return <FloatingButton />;
          }

          return <TabBarButton route={route} navigation={navigation} />;
        },
      })}>
      <Screen name={Routes.Home} component={HomeScreen} />
      <Screen name={Routes.Transactions} component={TransactionsScreen} />
      <Screen name={Routes.Add} component={TransactionsScreen} options={{}} />
      <Screen name={Routes.Categories} component={CategoriesScreen} />
      <Screen name={Routes.Settings} component={SettingsScreen} />
    </Navigator>
  );
}
