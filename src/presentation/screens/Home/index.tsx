import React, {useCallback} from 'react';
import BalanceCard from '~/presentation/components/BalanceCard';

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
import {SectionTitle} from '~/presentation/components/Shared/Typography';
import ServiceCard from '~/presentation/components/ServiceCard';
import TransactionsList from '~/presentation/components/TransactionsList';
import useShortcuts from '~/presentation/hooks/useShortcuts';

type HomeScreenProps = {
  navigation: {
    navigate: (route: string) => void;
  };
};

const HomeScreen: React.FC<HomeScreenProps> = ({navigation}) => {
  const {activeShortcuts} = useShortcuts();

  const handleShortcutPress = useCallback((navigateTo: string) => {
    navigation.navigate(navigateTo);
  }, []);

  return (
    <Container>
      <HomeHeader>
        <Logo source={require('../../assets/logo.png')} />
        <MenuIconButton>
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

export default HomeScreen;
