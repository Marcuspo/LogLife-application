/**
 * @format
 */

import * as React from 'react';
import { Provider as PaperProvider } from 'react-native-paper';
import Routes from './src/routes/routes';
import { ThemeProvider } from 'styled-components/native';

import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { theme } from './src/global/theme/theme';

const App = () => {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PaperProvider>
        <ThemeProvider theme={theme}>
          <Routes />
        </ThemeProvider>
      </PaperProvider>
    </GestureHandlerRootView>
  );
};

export default App;
