import {FlashList, ListRenderItemInfo} from '@shopify/flash-list';
import React, {useCallback, useState} from 'react';
import {Dimensions} from 'react-native';
import {useTheme} from 'styled-components/native';
import {translate} from '~/common/locales';
import {useListCategories, CategoryModel} from '~/features/category';

import {
  DefaultContainer,
  DefaultContent,
  Header,
  TabSelector,
  CategoryItem,
} from '~/presentation/components';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

export const CategoriesScreen = () => {
  const {colors} = useTheme();
  const {categories} = useListCategories();
  const [_selectedTransactionType, setSelectedTransactionType] = useState<
    'left' | 'right'
  >('left');

  const onTabSelectorPress = useCallback((type: 'left' | 'right') => {
    setSelectedTransactionType(type);
  }, []);

  const renderItem = useCallback(
    ({item}: ListRenderItemInfo<CategoryModel>) => {
      return <CategoryItem category={item} />;
    },
    [],
  );

  const renderListHeader = useCallback(() => {
    return (
      <TabSelector
        leftTitle={translate('incomes')}
        rightTitle={translate('expenses')}
        onPress={onTabSelectorPress}
        width={SCREEN_WIDTH / 2 - 16}
      />
    );
  }, [onTabSelectorPress]);

  return (
    <DefaultContainer style={{backgroundColor: colors.shape}}>
      <Header title={translate('categories')} />
      <DefaultContent>
        <FlashList
          data={categories}
          estimatedItemSize={50}
          renderItem={renderItem}
          ListHeaderComponent={renderListHeader}
          contentContainerStyle={{paddingVertical: 16}}
        />
      </DefaultContent>
    </DefaultContainer>
  );
};
