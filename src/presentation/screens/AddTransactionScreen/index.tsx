import React from 'react';
import {CurrencyInput} from '~/presentation/components/CurrencyInput';
import {
  DefaultContainer,
  DefaultContent,
} from '~/presentation/components/Shared/Layout';
import {DateItem} from './DateItem';
import DescriptionInput from './DescriptionInput';
import {ItemButton} from './ItemButton';

export const AddTransactionScreen = () => {
  return (
    <DefaultContainer invert>
      <CurrencyInput />
      <DefaultContent paddingTop={24}>
        <DateItem />
        <DescriptionInput />
        <ItemButton />
      </DefaultContent>
    </DefaultContainer>
  );
};
