import React from 'react';
import styled, {useTheme} from 'styled-components/native';
import {Routes} from '~/common/enums/Routes.enums';
import {SvgIcon} from '~/presentation/components/SvgIcon';

export function TabBarButton({route, navigation}: any) {
  const {colors} = useTheme();

  function onPress() {
    navigation.navigate(route?.name);
  }

  return (
    <Button
      onPress={onPress}
      paddingRight={route?.name === Routes.Transactions}
      paddingLeft={route?.name === Routes.Categories}>
      <SvgIcon
        size={26}
        name={mapRouteToIcon(route?.name)}
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
      return 'transactions';
    case Routes.Categories:
      return 'category';
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
  justify-content: center;
  align-items: center;
  padding-right: ${({paddingRight}) => (paddingRight ? 34 : 0)}px;
  padding-left: ${({paddingLeft}) => (paddingLeft ? 34 : 0)}px;
  background-color: ${({active}) => (active ? 'red' : '#fff')};
`;
