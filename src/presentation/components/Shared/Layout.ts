import styled, {css} from 'styled-components/native';

export const DefaultCard = styled.View`
  padding: 24px 32px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const DefaultContainer = styled.View<{invert?: boolean}>`
  flex: 1;
  background-color: ${({theme}) => theme.colors.shape};
`;

export const DefaultContent = styled.View<{
  paddingTop?: number;
}>`
  flex: 1;
  padding: 0 16px 16px;
  ${({paddingTop}) =>
    paddingTop &&
    css`
      padding-top: ${paddingTop}px;
    `}
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const DefaultItemContainer = styled.TouchableOpacity`
  padding: 12px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  border-radius: 12px;
  margin-bottom: 12px;
  border-bottom-width: 1px;
  border-bottom-color: ${({theme}) => theme.colors.shape};
`;

export const DefaultHeaderListWrapper = styled.View`
  padding: 0 0 24px 0;
`;
