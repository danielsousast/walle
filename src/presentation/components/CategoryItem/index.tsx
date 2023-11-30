import React from 'react';
import AppIcon from '../Shared/Icon';
import { DefaultItemContainer } from '../Shared/Layout';
import { Description } from '../Shared/Typography';
import { Button } from './styles';

const CategoryItem: React.FC = () => {
  return (
    <DefaultItemContainer>
      <Description>Salário</Description>
      <Button>
        <AppIcon icon="settings" size={22} />
      </Button>
    </DefaultItemContainer>
  );
};

export default CategoryItem;
