import '../common/locales';
import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {ModalProvider} from '~/presentation/hooks/useModal';
import {darkTheme, lightTheme} from '../presentation/global/theme';
import AppNavigator from './navigation';
import {useAppSettings} from '~/presentation/hooks/useAppSettings';

const queryClient = new QueryClient();

export const App: React.FC = () => {
  const {theme: userTheme} = useAppSettings();
  const theme = userTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <ModalProvider>
          <QueryClientProvider client={queryClient}>
            <AppNavigator />
            <StatusBar
              backgroundColor={theme.colors.background}
              barStyle={userTheme === 'dark' ? 'light-content' : 'dark-content'}
            />
          </QueryClientProvider>
        </ModalProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};
