import {FlashList} from '@shopify/flash-list';
import React, {useCallback, useState} from 'react';
import {Dimensions} from 'react-native';
import {useTheme} from 'styled-components';

import {
  DefaultContainer,
  DefaultContent,
  Header,
  TabSelector,
  CategoryItem,
} from '~/presentation/components';

const {width: SCREEN_WIDTH} = Dimensions.get('window');

export const CategoriesScreen: React.FC = ({navigation}: any) => {
  const {colors} = useTheme();
  const [_selectedTransactionType, setSelectedTransactionType] = useState<
    'left' | 'right'
  >('left');

  const onTabSelectorPress = useCallback((type: 'left' | 'right') => {
    setSelectedTransactionType(type);
  }, []);

  const renderItem = useCallback(() => {
    return <CategoryItem />;
  }, []);

  const renderListHeader = useCallback(() => {
    return (
      <TabSelector
        leftTitle="Incomes"
        rightTitle="Outcomes"
        onPress={onTabSelectorPress}
        width={SCREEN_WIDTH / 2 - 16}
      />
    );
  }, [onTabSelectorPress]);

  return (
    <DefaultContainer style={{backgroundColor: colors.shape}}>
      <Header title="Categories" navigation={navigation} />

      <DefaultContent>
        <FlashList
          data={['1', '2', '3']}
          estimatedItemSize={50}
          renderItem={renderItem}
          ListHeaderComponent={renderListHeader}
          contentContainerStyle={{paddingVertical: 16}}
        />
      </DefaultContent>
    </DefaultContainer>
  );
};
