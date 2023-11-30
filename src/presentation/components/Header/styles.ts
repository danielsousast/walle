import { Platform } from 'react-native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';
import styled from 'styled-components/native';

function getMarginTop(safeAreaInsetsTop: number) {
  return Platform.OS === 'android' && safeAreaInsetsTop
    ? safeAreaInsetsTop + 8
    : safeAreaInsetsTop;
}

export const HeaderContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 16px;
  margin-top: ${getMarginTop(StaticSafeAreaInsets.safeAreaInsetsTop)}px;
  justify-content: center;
`;

export const DateSelectText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
  font-family: ${({ theme }) => theme.fonts.medium};
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;

export const RightButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  right: 16px;
`;
