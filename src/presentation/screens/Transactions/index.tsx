import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import React, {useCallback} from 'react';
import {Transaction} from '~/domain/models/TransactionModel';
import Header from '~/presentation/components/Header';
import SearchInput from '~/presentation/components/SearchInput';
import {ListItem} from '~/presentation/components/ListItem';
import {
  DefaultContainer,
  DefaultContent,
  DefaultHeaderListWrapper,
} from '~/presentation/components/Shared/Layout';
import {useAllTransactions} from '~/presentation/hooks/useAllTransactions';
import {FloatingButton} from '~/presentation/components/FloatingButton';

const transactions: Transaction[] = [
  {
    id: '1',
    title: 'Salário Developer',
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

const TransactionsScreen: React.FC = ({navigation}: any) => {
  const {error, data} = useAllTransactions();

  console.log(data);
  console.log(error);

  const renderItem = useCallback(({item}: ListRenderItemInfo<Transaction>) => {
    return (
      <ListItem
        description={item.title}
        date={item.formattedDate}
        monetaryValue={item.formattedValue}
        label={item.category}
        itemType={item.type}
      />
    );
  }, []);

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
      <Header title="Transactions" navigation={navigation} />
      <DefaultContent>
        <FlashList
          data={transactions}
          estimatedItemSize={50}
          renderItem={renderItem}
          ListHeaderComponent={renderListHeader}
          contentContainerStyle={{paddingVertical: 24}}
        />
      </DefaultContent>
      <FloatingButton />
    </DefaultContainer>
  );
};

export default TransactionsScreen;
