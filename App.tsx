/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {type PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
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

const styles = StyleSheet.create({});

export default App;
