import styled from 'styled-components/native';
import {DefaultCard} from '../Shared/Layout';

export const Container = styled(DefaultCard)`
  margin-top: 16px;
  padding: 24px;
  padding-bottom: 4px;
`;

export const ItemWrapper = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex-direction: row;
  margin-bottom: 24px;
`;

export const IconWrapper = styled.View`
  justify-content: center;
  align-items: center;
  margin-right: 16px;
  border-radius: 20px;
  width: 40px;
  height: 40px;
  background-color: ${({theme}) => theme.colors.red};
`;

export const LeftContainer = styled.View`
  flex: 1;
`;

export const RightContainer = styled.View`
  justify-content: center;
  align-items: flex-end;
`;

export const ItemDescription = styled.Text`
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.textDark};
`;
