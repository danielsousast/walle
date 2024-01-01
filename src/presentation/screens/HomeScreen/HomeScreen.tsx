import React, {useCallback} from 'react';

import * as Styled from './styles';
import {
  SectionTitle,
  ServiceCard,
  TransactionsList,
  BalanceCard,
  AppIcon,
} from '~/presentation/components';
import useShortcuts from '~/presentation/hooks/useShortcuts';
import {useModal} from '~/presentation/hooks/useModal';
import {translate} from '~/common/locales';

type HomeScreenProps = {
  navigation: {
    navigate: (route: string) => void;
  };
};

export const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {activeShortcuts} = useShortcuts();
  const {handleOpenModalMenu} = useModal();

  const handleShortcutPress = useCallback(
    (navigateTo: string) => {
      navigation.navigate(navigateTo);
    },
    [navigation],
  );

  return (
    <Styled.Container>
      <Styled.HomeHeader>
        <Styled.Logo source={require('../../assets/logo.png')} />
        <Styled.MenuIconButton onPress={handleOpenModalMenu}>
          <AppIcon icon="menu" size={26} />
        </Styled.MenuIconButton>
      </Styled.HomeHeader>
      <Styled.Content>
        <Styled.Wrapper>
          <SectionTitle>{translate('accountOverview')}</SectionTitle>
          <BalanceCard />
          <SectionTitle style={{marginTop: 32}}>
            {translate('quickAccess')}
          </SectionTitle>
        </Styled.Wrapper>
        <Styled.ServiceScroll>
          {activeShortcuts.map(shortcut => (
            <ServiceCard
              key={shortcut.id}
              icon={shortcut.icon}
              title={shortcut.title}
              onPress={() => handleShortcutPress(shortcut.navigateTo)}
            />
          ))}
        </Styled.ServiceScroll>
        <Styled.Wrapper>
          <SectionTitle style={{marginTop: 32}}>
            {translate('lastTransactions')}
          </SectionTitle>
          <TransactionsList />
        </Styled.Wrapper>
      </Styled.Content>
    </Styled.Container>
  );
};
