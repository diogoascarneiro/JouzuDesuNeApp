/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from './src/utils/themes';
import StartScreen from './src/screens/landing/StartScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Start"
              component={StartScreen}
              options={{title: 'Jouzu desu ne!'}}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
