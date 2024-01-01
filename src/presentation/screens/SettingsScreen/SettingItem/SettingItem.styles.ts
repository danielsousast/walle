import styled from 'styled-components/native';

export const MenuButton = styled.TouchableOpacity`
  padding: 16px 24px;
  margin-bottom: 8px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  background-color: ${({theme}) => theme.colors.shape};
`;
