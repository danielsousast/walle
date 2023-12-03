import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  border-bottom-width: 1px;
  padding: 12px 0;
  border-bottom-color: ${({theme}) => theme.colors.shape};
`;

export const Input = styled.TextInput`
  flex: 1;
  margin-left: 16px;
`;
