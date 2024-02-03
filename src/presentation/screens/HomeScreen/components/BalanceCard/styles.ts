import styled from 'styled-components/native';
import {DefaultCard} from '../../../../components/Shared/Layout';

export const Container = styled(DefaultCard)`
  justify-content: center;
  margin-top: 24px;
  padding: 24px;
  background-color: ${({theme}) => theme.colors.primary};
`;

export const Value = styled.Text.attrs({
  numberOfLines: 1,
})<{color?: string}>`
  font-size: 16px;

  width: 100%;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({color, theme}) => color || theme.colors.textDark};
`;

export const MainValue = styled(Value)`
  font-size: 24px;
  margin-top: 8px;
  font-weight: 500;
  color: aliceblue;
`;

export const OptionsWrapper = styled.View`
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  align-items: flex-end;
`;

export const OptionButton = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  flex: 1;
  flex-direction: row;
  margin-top: 24px;
`;

export const TextWrapper = styled.View`
  margin-left: 8px;
`;

export const EyeButton = styled.TouchableOpacity`
  opacity: 0.8;
  position: absolute;
  right: 24px;
  top: 16px;
`;
