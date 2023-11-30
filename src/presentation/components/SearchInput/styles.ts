import styled from 'styled-components/native';

export const SearchInputWrapper = styled.View`
  height: 48px;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  padding: 0 12px;
  border: 1px solid ${({ theme }) => theme.colors.textLight};
`;

export const Input = styled.TextInput.attrs(({ theme }: any) => ({
  color: theme.colors.textDark,
  placeholderTextColor: theme.colors.textLight,
}))`
  flex: 1;
  margin-left: 8px;
  margin-right: 8px;
  font-family: ${({ theme }) => theme.fonts.regular};
`;

export const ClearButton = styled.TouchableOpacity`
  width: 26px;
  height: 26px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.shape};
`;
