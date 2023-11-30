import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AccountsScreen from '~/presentation/screens/Accounts';
import CategoriesScreen from '~/presentation/screens/Categories';
import HomeScreen from '~/presentation/screens/Home';
import TransactionsScreen from '~/presentation/screens/Transactions';

const { Navigator, Screen } = createNativeStackNavigator();

export default function AppNavigator() {
  return (
      <Navigator
        screenOptions={{
          headerShown: false,
        }}
      >
        <Screen name="Home" component={HomeScreen} />
        <Screen name="Categories" component={CategoriesScreen} />
        <Screen name="Transactions" component={TransactionsScreen} />
        <Screen name="Accounts" component={AccountsScreen} />
      </Navigator>
  );
}
