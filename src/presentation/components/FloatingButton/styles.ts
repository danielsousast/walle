import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  align-items: center;
  position: absolute;
  bottom: 50px;
  width: 100%;
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: black;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.4;
`;

export const ButtonWrapperPlus = styled(Animated.View)`
  bottom: 0;
  z-index: 999;
  position: absolute;
  background-color: ${({theme}) => theme.colors.primary};
  width: 60px;
  height: 60px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;

export const ButtonWrapperSecondary = styled(Animated.View)`
  position: absolute;
  z-index: 888;
  background-color: ${({theme}) => theme.colors.shape};
  width: 48px;
  height: 48px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
`;
