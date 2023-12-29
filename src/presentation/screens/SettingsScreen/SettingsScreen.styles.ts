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
