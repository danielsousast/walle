import {StyleSheet} from 'react-native';
import styled from 'styled-components/native';

export const ModalCotent = styled.View`
  height: 60%;
  width: 100%;
  padding: 16px;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${({theme}) => theme.colors.background};
`;

export const TitleWrapper = styled.View`
  margin-top: 8px;
  margin-bottom: 24px;
`;

export const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
    margin: 0,
  },
});

export const ModalShape = styled.View`
  height: 3px;
  width: 40px;
  border-radius: 2px;
  background-color: ${({theme}) => theme.colors.textLight};
  align-self: center;
`;
