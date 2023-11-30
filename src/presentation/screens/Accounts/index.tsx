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

const transactions: Transaction[] = [
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

const AccountsScreen: React.FC = ({navigation}: any) => {
  const renderItem = useCallback(({item}: ListRenderItemInfo<Transaction>) => {
    return (
      <ListItem
        description={item.title}
        label={item.category}
        monetaryValue={item.formattedValue}
        date={item.formattedDate}
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
      <Header title="Accounts" navigation={navigation} />
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

export default AccountsScreen;
