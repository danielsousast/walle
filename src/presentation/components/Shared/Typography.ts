import styled from 'styled-components/native';

export const SectionTitle = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.text};
`;

export const Label = styled.Text`
  margin-bottom: 4px;
  font-size: 13px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text};
`;

export const Description = styled.Text`
  margin-bottom: 4px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.textDark};
`;
