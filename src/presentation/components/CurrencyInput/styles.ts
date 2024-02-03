import styled from 'styled-components/native';

export const Input = styled.TextInput.attrs(({theme}) => ({
  placeholderTextColor: theme.colors.text,
}))`
  height: 140px;
  padding: 12px 16px;
  font-size: 24px;
  color: ${({theme}) => theme.colors.textDark};
`;
