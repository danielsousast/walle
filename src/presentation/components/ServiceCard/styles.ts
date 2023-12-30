import {Dimensions} from 'react-native';
import styled from 'styled-components/native';

const {width} = Dimensions.get('window');
const CARD_WIDTH = width * 0.25;

export const ServiceCardContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  width: ${CARD_WIDTH}px;
  height: ${CARD_WIDTH}px;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin-right: 12px;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.shape};
`;
