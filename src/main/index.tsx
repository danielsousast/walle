import {NavigationContainer} from '@react-navigation/native';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import React from 'react';
import {StatusBar, useColorScheme} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {ModalProvider} from '~/presentation/hooks/useModal';
import {darkTheme, lightTheme} from '../presentation/global/theme';
import AppNavigator from './navigation';

const queryClient = new QueryClient();

const App: React.FC = () => {
  const deviceTheme = useColorScheme();
  const theme = deviceTheme && deviceTheme === 'dark' ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <ModalProvider>
          <QueryClientProvider client={queryClient}>
            <AppNavigator />
            <StatusBar
              backgroundColor={theme.colors.background}
              barStyle={
                deviceTheme === 'dark' ? 'light-content' : 'dark-content'
              }
            />
          </QueryClientProvider>
        </ModalProvider>
      </NavigationContainer>
    </ThemeProvider>
  );
};

export default App;
