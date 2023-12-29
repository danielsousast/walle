import React, {useCallback} from 'react';

import {
  Container,
  Content,
  Logo,
  MenuIcon,
  MenuIconButton,
  HomeHeader,
  ServiceScroll,
  Wrapper,
} from './styles';
import {
  SectionTitle,
  ServiceCard,
  TransactionsList,
  BalanceCard,
} from '~/presentation/components';
import useShortcuts from '~/presentation/hooks/useShortcuts';
import {useModal} from '~/presentation/hooks/useModal';

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
    <Container>
      <HomeHeader>
        <Logo source={require('../../assets/logo.png')} />
        <MenuIconButton onPress={handleOpenModalMenu}>
          <MenuIcon />
        </MenuIconButton>
      </HomeHeader>
      <Content>
        <Wrapper>
          <SectionTitle>Account Overview</SectionTitle>
          <BalanceCard />
          <SectionTitle style={{marginTop: 32}}>Quick Access</SectionTitle>
        </Wrapper>
        <ServiceScroll>
          {activeShortcuts.map(shortcut => (
            <ServiceCard
              key={shortcut.id}
              icon={shortcut.icon}
              title={shortcut.title}
              onPress={() => handleShortcutPress(shortcut.navigateTo)}
            />
          ))}
        </ServiceScroll>
        <Wrapper>
          <SectionTitle style={{marginTop: 32}}>Last Trasactions</SectionTitle>
          <TransactionsList />
        </Wrapper>
      </Content>
    </Container>
  );
};
