/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from './src/utils/themes';
import StartScreen from './src/screens/landing/StartScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import LoginScreen from './src/screens/auth/LoginScreen';
import SignupScreen from './src/screens/auth/SignupScreen';
import {RootStackParams} from './src/utils/globalTypes';

const RootStack = createNativeStackNavigator<RootStackParams>();

const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <NavigationContainer>
          <RootStack.Navigator initialRouteName="Start">
            <RootStack.Screen
              name="Start"
              component={StartScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="Login"
              component={LoginScreen}
              options={{headerShown: false}}
            />
            <RootStack.Screen
              name="Signup"
              component={SignupScreen}
              options={{headerShown: false}}
            />
          </RootStack.Navigator>
        </NavigationContainer>
      </ThemeProvider>
    </>
  );
};

export default App;
