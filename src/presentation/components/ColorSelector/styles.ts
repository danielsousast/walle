import styled from 'styled-components/native';

export const ColorSelectorContainer = styled.View`
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-color:${({theme}) => theme.colors.shape}
`;

export const TopWrapper = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const Label = styled.Text`
  margin-bottom: 4px;
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
  margin-left: 12px;
`;

export const BottomWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 12px;
`;

export const ColorButton = styled.TouchableOpacity<{ color: string }>`
  height: 26px;
  width: 26px;
  border-radius: 50px;
  margin-right: 16px;
  background-color: ${({ theme, color }) => color ?? theme.colors.textDark};
`;

export const ChangeColorButton = styled.TouchableOpacity`
  height: 28px;
  border-radius: 50px;
  padding: 0 12px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.text};
`;
