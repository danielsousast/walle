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
    <Button onPress={onPress}>
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
    default:
      return 'home';
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
  background-color: ${({active}) => (active ? 'red' : '#fff')};
`;
