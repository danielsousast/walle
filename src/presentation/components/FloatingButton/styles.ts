import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  position: absolute;
  bottom: 20px;
  width: 100%;
  z-index: 999;
`;

export const Overlay = styled.View`
  flex: 1;
  background-color: black;
  height: 100%;
  width: 100%;
  position: absolute;
  opacity: 0.4;
  z-index: 999;
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
  background-color: ${({theme}) => theme.colors.background};
  width: 52px;
  height: 52px;
  border-radius: 30px;
  justify-content: center;
  align-items: center;
  border-width: 1px;
  border-color: rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 5px rgba(0, 0, 0, 0.1);
`;
