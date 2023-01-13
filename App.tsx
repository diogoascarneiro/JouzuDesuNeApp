/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from './src/utils/themes';
import StartScreen from './src/screens/landing/StartScreen';

const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <StartScreen />
      </ThemeProvider>
    </>
  );
};

export default App;
