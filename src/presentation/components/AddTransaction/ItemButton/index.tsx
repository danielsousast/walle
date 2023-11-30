import React from 'react';
import AppIcon from '~/presentation/components/Shared/Icon';
import { BadgeWrapper, BageText, ItemButtonContainer } from './styles';

export const ItemButton: React.FC = () => {
  return (
    <ItemButtonContainer>
      <AppIcon icon="category" />
      <BadgeWrapper>
        <BageText>salário</BageText>
      </BadgeWrapper>
    </ItemButtonContainer>
  );
};
