import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import React, {useCallback} from 'react';
import {
  DefaultContainer,
  DefaultContent,
  DefaultHeaderListWrapper,
} from '~/presentation/components/Shared/Layout';
import {useAllTransactions} from '~/presentation/hooks/useAllTransactions';
import {
  FloatingButton,
  Header,
  ListItem,
  SearchInput,
} from '~/presentation/components';
import {TransactionModel} from '~/modules/transaction';

export const TransactionsScreen: React.FC = ({navigation}: any) => {
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
          data={data}
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
