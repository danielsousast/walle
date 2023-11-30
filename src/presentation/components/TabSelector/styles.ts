import Animated from 'react-native-reanimated';
import styled from 'styled-components/native';

export const Container = styled.View`
  margin-bottom: 16px;
`;

export const Row = styled.View`
  flex-direction: row;
`;

export const Label = styled(Animated.Text)`
  color: ${({theme: {colors}}) => colors.text};
  font-size: 12px;
`;

export const Button = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  padding: 15px 0;
  height: 50px;
`;

export const Shape = styled(Animated.View)`
  background-color: ${({theme: {colors}}) => colors.primary};
  border-radius: 6px;
  height: 4px;
  width: 46px;
`;

export const Line = styled.View`
  background-color: ${({theme: {colors}}) => colors.text};
  height: 1px;
  opacity: 0.2;
  width: 100%;
  align-self: center;
`;
