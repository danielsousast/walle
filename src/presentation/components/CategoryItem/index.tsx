import React from 'react';
import {AppIcon} from '../Shared/Icon';
import {Description} from '../Shared/Typography';
import {Button, ItemContainer} from './styles';

export const CategoryItem: React.FC = () => {
  return (
    <ItemContainer>
      <Button>
        <AppIcon icon="menu" size={22} />
      </Button>
      <Description>Salário</Description>
    </ItemContainer>
  );
};
