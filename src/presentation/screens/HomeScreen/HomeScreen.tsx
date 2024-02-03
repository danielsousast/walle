import React from 'react';

import * as S from './styles';
import {
  SectionTitle,
  TransactionsList,
  BalanceCard,
  AppIcon,
  ServiceCard,
} from '~/presentation/components';
import {useModal} from '~/presentation/hooks/useModal';
import {translate} from '~/common/locales';

type HomeScreenProps = {
  navigation: {
    navigate: (route: string) => void;
  };
};

export const HomeScreen: React.FC<HomeScreenProps> = () => {
  const {handleOpenModalMenu} = useModal();

  return (
    <S.Container>
      <S.HomeHeader>
        <S.Logo source={require('../../assets/logo.png')} />
        <S.MenuIconButton onPress={handleOpenModalMenu}>
          <AppIcon icon="menu" size={26} />
        </S.MenuIconButton>
      </S.HomeHeader>
      <S.Content>
        <S.Wrapper>
          <BalanceCard />
          <SectionTitle
            colorStyle="dark"
            style={{
              marginTop: 24,
            }}>
            {translate('quickAccess')}
          </SectionTitle>
        </S.Wrapper>

        <S.ServiceScroll>
          <ServiceCard
            title="Categories"
            icon="transaction"
            onPress={() => {}}
          />
          <ServiceCard title="Accounts" icon="bank" onPress={() => {}} />
        </S.ServiceScroll>

        <S.Wrapper>
          <TransactionsList />
        </S.Wrapper>
      </S.Content>
    </S.Container>
  );
};
