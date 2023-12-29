import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import React, {useCallback} from 'react';
import * as Shared from '~/presentation/components/Shared/Layout';
import {useAllTransactions, TransactionModel} from '~/features/transaction';
import {Header, ListItem, SearchInput} from '~/presentation/components';

export const TransactionsScreen: React.FC = () => {
  const {data} = useAllTransactions();

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<TransactionModel>) => {
      return (
        <ListItem
          description={item.title}
          date={item.formattedDate}
          monetaryValue={item.formattedValue}
          label={item.category}
          itemType={item.type}
        />
      );
    },
    [],
  );

  const renderListHeader = useCallback(
    () => (
      <Shared.DefaultHeaderListWrapper>
        <SearchInput />
      </Shared.DefaultHeaderListWrapper>
    ),
    [],
  );

  return (
    <Shared.DefaultContainer invert>
      <Header title="Transactions" />
      <Shared.DefaultContent>
        <FlashList
          data={data}
          estimatedItemSize={50}
          renderItem={renderItem}
          ListHeaderComponent={renderListHeader}
          contentContainerStyle={{paddingVertical: 24}}
        />
      </Shared.DefaultContent>
    </Shared.DefaultContainer>
  );
};
