import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Routes} from '~/common/enums/Routes.enums';
import {AppIcon} from '~/presentation/components';

export function TabBarButton({route, navigation}: any) {
  const {colors} = useTheme();

  function onPress() {
    if (route?.name === Routes.Add) {
      return navigation.navigate(Routes.AddTransaction);
    }
    navigation.navigate(route?.name);
  }

  if (route?.name === Routes.Add) {
    return (
      <HomeButton onPress={onPress}>
        <AppIcon
          size={22}
          icon={mapRouteToIcon(route?.name)}
          color={colors.background}
        />
      </HomeButton>
    );
  }

  return (
    <Button onPress={onPress}>
      <AppIcon
        size={22}
        icon={mapRouteToIcon(route?.name)}
        color={navigation.isFocused() ? colors.primary : colors.textLight}
      />
    </Button>
  );
}

function mapRouteToIcon(routeName: string) {
  switch (routeName) {
    case Routes.Home:
      return 'home';
    case Routes.Transactions:
      return 'transaction';
    case Routes.Accounts:
      return 'wallet';
    case Routes.Add:
      return 'plus';
    default:
      return 'settings';
  }
}

export const Button = styled.TouchableOpacity<{
  paddingRight?: boolean;
  paddingLeft?: boolean;
  active?: boolean;
}>`
  flex: 1;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  background-color: ${({theme}) => theme.colors.background};
`;

export const HomeButton = styled.TouchableOpacity<{
  paddingRight?: boolean;
  paddingLeft?: boolean;
  active?: boolean;
}>`
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  height: 44px;
  width: 52px;
  margin-top: 2px;

  background-color: ${({theme}) => theme.colors.primary};
`;
