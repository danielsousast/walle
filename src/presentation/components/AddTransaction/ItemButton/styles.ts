import styled from 'styled-components/native';

export const ItemButtonContainer = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 8px 0px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color:${({theme}) => theme.colors.shape}
`;

export const BadgeWrapper = styled.View`
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  padding: 2px 12px;
  margin-left: 16px;
`;

export const BageText = styled.Text`

`;
