import { FlashList } from '@shopify/flash-list';
import React, { useCallback, useState } from 'react';
import { Dimensions } from 'react-native';
import { useTheme } from 'styled-components';
import CategoryItem from '~/presentation/components/CategoryItem';
import Header from '~/presentation/components/Header';
import {
  DefaultContainer,
  DefaultContent,
} from '~/presentation/components/Shared/Layout';
import TabSelector from '~/presentation/components/TabSelector';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

const CategoriesScreen: React.FC = ({ navigation }: any) => {
  const { colors } = useTheme();
  const [selectedTransactionType, setSelectedTransactionType] = useState<
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
  }, [selectedTransactionType]);

  return (
    <DefaultContainer style={{ backgroundColor: colors.shape }}>
      <Header title="Categories" navigation={navigation} />

      <DefaultContent>
        <FlashList
          data={['1', '2', '3']}
          estimatedItemSize={50}
          renderItem={renderItem}
          ListHeaderComponent={renderListHeader}
          contentContainerStyle={{ paddingVertical: 16 }}
        />
      </DefaultContent>
    </DefaultContainer>
  );
};

export default CategoriesScreen;
