import React from 'react';
import {AppIcon} from '../Shared/Icon';
import {
  ColorSelectorContainer,
  TopWrapper,
  Label,
  BottomWrapper,
  ColorButton,
  ChangeColorButton,
  ButtonText,
} from './styles';

const ColorSelector: React.FC = () => {
  return (
    <ColorSelectorContainer>
      <TopWrapper>
        <AppIcon icon="bank" size={24} />
        <Label>Color</Label>
      </TopWrapper>
      <BottomWrapper>
        <ColorButton color="red" />
        <ColorButton color="green" />
        <ColorButton color="pink" />
        <ColorButton color="cyan" />
        <ChangeColorButton>
          <ButtonText>Other color</ButtonText>
        </ChangeColorButton>
      </BottomWrapper>
    </ColorSelectorContainer>
  );
};

export default ColorSelector;
