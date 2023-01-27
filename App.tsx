/* eslint-disable @typescript-eslint/no-unused-vars */
import {SafeAreaView} from 'react-native';
import {ThemeProvider} from 'styled-components/native';
import {lightTheme} from './src/utils/themes';

import {NavigationContainer} from '@react-navigation/native';

import {UserProviderWrapper} from './src/context/UserContext';
import Routes from './src/routes/Routes';

const App = () => {
  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <UserProviderWrapper>
          <NavigationContainer>
            <Routes />
          </NavigationContainer>
        </UserProviderWrapper>
      </ThemeProvider>
    </>
  );
};

export default App;
