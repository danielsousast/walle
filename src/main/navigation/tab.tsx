/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {useTheme} from 'styled-components/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {TransactionsScreen, HomeScreen} from '~/presentation/screens';
import {FloatingButton} from '~/presentation/components';
import {TabBarButton} from './components/TabBarButton';
import {Routes} from '~/common/enums/Routes.enums';

const {Navigator, Screen} = createBottomTabNavigator();

export function TabNavigator() {
  const {colors} = useTheme();
  return (
    <Navigator
      screenOptions={({route, navigation}) => ({
        headerShown: false,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.textLight,
        },

        tabBarButton: () => {
          if (route.name === Routes.Add) {
            return <FloatingButton />;
          }

          return <TabBarButton route={route} navigation={navigation} />;
        },
      })}>
      <Screen name={Routes.Home} component={HomeScreen} />
      <Screen name={Routes.Add} component={TransactionsScreen} options={{}} />
      <Screen name={Routes.Transactions} component={TransactionsScreen} />
    </Navigator>
  );
}
