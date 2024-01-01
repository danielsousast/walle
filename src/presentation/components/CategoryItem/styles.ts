import styled from 'styled-components/native';

export const ItemContainer = styled.TouchableOpacity`
  padding: 12px;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.shape};
  margin-bottom: 12px;
`;

export const Button = styled.TouchableOpacity`
  margin-right: 12px;
`;
