import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import React, {useCallback} from 'react';
import {TransactionModel} from '~/features/transaction';

import {
  DefaultContainer,
  DefaultContent,
  DefaultHeaderListWrapper,
  ListItem,
  SearchInput,
  Header,
} from '~/presentation/components';

const transactions: TransactionModel[] = [
  {
    id: '1',
    title: 'Nubank',
    category: 'Salário',
    value: 1000,
    formattedValue: 'R$ 1.000,00',
    formattedDate: '01/01/2020',
    type: 'income',
  },
  {
    id: `2`,
    title: 'Almoço',
    category: 'Alimentação',
    value: 1000,
    formattedValue: 'R$ 1.000,00',
    formattedDate: '01/01/2020',
    type: 'outcome',
  },
  {
    id: '3',
    title: 'Compra Roupa',
    category: 'Vestuário',
    value: 1000,
    formattedValue: 'R$ 1.000,00',
    formattedDate: '01/01/2020',
    type: 'outcome',
  },
];

export const AccountsScreen = () => {
  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<TransactionModel>) => {
      return (
        <ListItem
          description={item.title}
          label={item.category}
          monetaryValue={item.formattedValue}
          date={item.formattedDate}
        />
      );
    },
    [],
  );

  const renderListHeader = useCallback(
    () => (
      <DefaultHeaderListWrapper>
        <SearchInput />
      </DefaultHeaderListWrapper>
    ),
    [],
  );

  return (
    <DefaultContainer invert>
      <Header title="Accounts" />
      <DefaultContent>
        <FlashList
          data={transactions}
          estimatedItemSize={50}
          renderItem={renderItem}
          ListHeaderComponent={renderListHeader}
          contentContainerStyle={{paddingVertical: 24}}
        />
      </DefaultContent>
    </DefaultContainer>
  );
};
