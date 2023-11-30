import styled, {css} from 'styled-components/native';

export const DefaultCard = styled.View`
  padding: 24px 32px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const DefaultContainer = styled.View<{invert?: boolean}>`
  flex: 1;
  background-color: ${({theme, invert}) =>
    invert ? theme.colors.shape : theme.colors.background};
`;

export const DefaultContent = styled.View<{
  paddingTop?: number;
}>`
  flex: 1;
  margin-top: 16px;
  padding: 0 16px 16px;
  ${({paddingTop}) =>
    paddingTop &&
    css`
      padding-top: ${paddingTop}px;
    `}
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const DefaultItemContainer = styled.TouchableOpacity`
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  background-color: ${({theme}) => theme.colors.shape};
  margin-bottom: 12px;
`;

export const DefaultHeaderListWrapper = styled.View`
  padding: 0 0 24px 0;
`;
