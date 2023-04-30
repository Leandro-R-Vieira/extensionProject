import * as React from 'react';
import { store } from './src/redux';
import { Routes } from './src/routes';
import { Provider } from 'react-redux';
import theme from './src/global/theme';
import { ThemeProvider } from 'styled-components/native';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}
export default App;
