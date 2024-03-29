import styled, {css} from 'styled-components/native';
import StaticSafeAreaInsets from 'react-native-static-safe-area-insets';

export const Container = styled.SafeAreaView`
  flex: 1;
  background-color: ${({theme}) => theme.colors.background};
`;

export const Content = styled.ScrollView.attrs({
  contentContainerStyle: {
    paddingBottom: 40,
  },
})`
  flex: 1;
  padding: 12px 0 16px;
`;

export const Wrapper = styled.View`
  padding: 0 16px;
`;

export const Logo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  width: 35%;
  height: 40px;
`;

export const HomeHeader = styled.View`
  padding: 0 16px;
  ${!StaticSafeAreaInsets.safeAreaInsetsTop &&
  css`
    padding: 8px 16px;
  `}
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MenuIconButton = styled.TouchableOpacity``;

export const ServiceScroll = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingHorizontal: 16,
  },
})`
  margin-top: 16px;
`;
