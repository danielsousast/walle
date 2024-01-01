import styled from 'styled-components/native';

export const MenuButton = styled.TouchableOpacity`
  padding: 16px 24px;
  margin-bottom: 8px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const Label = styled.Text`
  font-size: 14px;
  font-weight: 500;
  margin-left: 16px;
  font-family: ${({theme}) => theme.fonts.bold};
  color: ${({theme}) => theme.colors.text};
`;

export const Content = styled.View`
  justify-content: center;
  background-color: ${({theme}) => theme.colors.background};
  padding: 24px;
  padding-top: 32px;
  border-radius: 12px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({theme}) => theme.colors.text};
  opacity: 0.2;
  margin: 16px 0;
  margin-bottom: 24px;
`;

export const CloseButton = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  width: 40px;
  height: 40px;
  top: -20px;
  border-radius: 20px;
  align-self: center;
  background-color: ${({theme}) => theme.colors.textLight};
  border: 1px solid ${({theme}) => theme.colors.textLight};
`;
