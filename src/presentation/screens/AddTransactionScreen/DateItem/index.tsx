import React from 'react';
import {AppIcon} from '~/presentation/components/Shared/Icon';
import {BadgeWrapper, BageText, ItemButtonContainer} from './styles';

export const DateItem: React.FC = () => {
  return (
    <ItemButtonContainer>
      <AppIcon icon="calendar" size={22} />
      <BadgeWrapper>
        <BageText>today</BageText>
      </BadgeWrapper>
      <BadgeWrapper>
        <BageText>custom</BageText>
      </BadgeWrapper>
    </ItemButtonContainer>
  );
};
