import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import React, {useCallback} from 'react';
import {translate} from '~/common/locales';
import {AccountModel} from '~/features/account/account.interfaces';
import {useListAccounts} from '~/features/account/hooks/useListAccounts';

import {
  DefaultContainer,
  DefaultContent,
  DefaultHeaderListWrapper,
  ListItem,
  SearchInput,
  Header,
} from '~/presentation/components';

export const AccountsScreen = () => {
  const {accounts} = useListAccounts();
  const renderItem = useCallback(({item}: ListRenderItemInfo<AccountModel>) => {
    return (
      <ListItem
        description={item.name}
        label={item.name}
        monetaryValue={item.name}
        date={item.name}
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
      <Header title={translate('accounts')} />
      <DefaultContent>
        <FlashList
          data={accounts}
          estimatedItemSize={50}
          renderItem={renderItem}
          ListHeaderComponent={renderListHeader}
          contentContainerStyle={{paddingVertical: 24}}
        />
      </DefaultContent>
    </DefaultContainer>
  );
};
