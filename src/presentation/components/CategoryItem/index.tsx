import React from 'react';
import {Description} from '../Shared/Typography';
import {ItemContainer} from './styles';
import {CategoryModel} from '~/features/category/category.interfaces';
import {IconCircle} from '../IconCircle';

interface Props {
  category: CategoryModel;
}

export const CategoryItem = ({category}: Props) => {
  return (
    <ItemContainer>
      <IconCircle color={category.color} icon="category" />
      <Description>{category.name}</Description>
    </ItemContainer>
  );
};
