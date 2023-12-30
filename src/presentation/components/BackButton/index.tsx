import React from 'react';
import styled from 'styled-components/native';
import {AppIcon} from '../Shared/Icon';

export const ButtonContainer = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 0;
  left: 16px;
`;

type BackButtonProps = {
  onPress: () => void;
};

const BackButton: React.FC<BackButtonProps> = ({onPress}) => {
  return (
    <ButtonContainer onPress={onPress}>
      <AppIcon icon="back" size={26} />
    </ButtonContainer>
  );
};

export default React.memo(BackButton);
