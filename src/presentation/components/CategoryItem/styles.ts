import styled from 'styled-components/native';

export const ItemContainer = styled.TouchableOpacity`
  padding: 12px;
  flex-direction: row;
  align-items: center;
  border-radius: 12px;
  margin-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.shape};
`;
