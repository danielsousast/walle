import React from 'react';
import {AppIcon} from '../Shared/Icon';
import {
  ColorSelectorContainer,
  TopWrapper,
  Label,
  BottomWrapper,
  IconButton,
  ChangeColorButton,
  ButtonText,
} from './styles';

export const IconSelector: React.FC = () => {
  return (
    <ColorSelectorContainer>
      <TopWrapper>
        <AppIcon icon="bank" size={24} />
        <Label>Icom</Label>
      </TopWrapper>
      <BottomWrapper>
        <IconButton>
          <AppIcon icon="eye-on" size={16} />
        </IconButton>
        <IconButton>
          <AppIcon icon="bank" size={16} />
        </IconButton>
        <IconButton>
          <AppIcon icon="edit" size={16} />
        </IconButton>
        <IconButton>
          <AppIcon icon="category" size={16} />
        </IconButton>
        <ChangeColorButton>
          <ButtonText>Other icon</ButtonText>
        </ChangeColorButton>
      </BottomWrapper>
    </ColorSelectorContainer>
  );
};
