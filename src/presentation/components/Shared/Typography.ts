import styled, {css} from 'styled-components/native';

interface TextProps {
  bold?: boolean;
  italic?: boolean;
}

const modifiers = {
  bold: () => css`
    font-weight: bold;
  `,
  italic: () => css`
    font-style: italic;
  `,
};

export const TexBase = styled.Text<TextProps>`
  ${({bold, italic}) => css`
    ${bold && modifiers.bold}
    ${italic && modifiers.italic}
  `}
`;

export const SectionTitle = styled(TexBase)`
  font-size: 16px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.text};
`;

export const Label = styled(TexBase)`
  margin-bottom: 4px;
  font-size: 13px;
  font-family: ${({theme}) => theme.fonts.regular};
  color: ${({theme}) => theme.colors.text};
`;

export const Description = styled(TexBase)`
  margin-bottom: 4px;
  font-family: ${({theme}) => theme.fonts.medium};
  color: ${({theme}) => theme.colors.textDark};
`;
