import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  AccountsScreen,
  HomeScreen,
  CategoriesScreen,
  TransactionsScreen,
} from '~/presentation/screens';

const {Navigator, Screen} = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Screen name="Home" component={HomeScreen} />
      <Screen name="Categories" component={CategoriesScreen} />
      <Screen name="Transactions" component={TransactionsScreen} />
      <Screen name="Accounts" component={AccountsScreen} />
    </Navigator>
  );
}
