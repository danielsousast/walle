import styled from 'styled-components/native';

export const ItemButtonContainer = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 12px 0px;
  width: 100%;
  border-bottom-width: 1px;
  border-bottom-color:${({theme}) => theme.colors.shape}
`;

export const BadgeWrapper = styled.TouchableOpacity`
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  background-color: #ccc;
  padding: 2px 12px;
  margin-left: 16px;
`;

export const BageText = styled.Text`

`;
