import styled from 'styled-components/native';
import { DefaultCard } from '../Shared/Layout';

export const Container = styled(DefaultCard)`
  justify-content: center;
  align-items: center;
  margin-top: 24px;
  padding: 24px;
`;

export const Value = styled.Text.attrs({
  numberOfLines: 1,
})<{ color?: string }>`
  font-size: 16px;
  text-align: center;
  width: 100%;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ color, theme }) => color || theme.colors.textDark};
`;

export const MainValue = styled(Value)`
  font-size: 28px;
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
