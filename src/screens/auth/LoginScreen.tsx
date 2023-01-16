import React from 'react';

import {UsernameInput, PasswordInput} from '../../components/UI/Inputs';
import {
  MainContainer,
  BtnFull,
  H1,
  AuthWrapper,
  HeaderWrapper,
  LogoS,
  LogoWrapper,
} from './styled.Auth';
import {SafeAreaView} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <MainContainer>
        <LogoWrapper>
          <LogoS />
        </LogoWrapper>
        <HeaderWrapper>
          <H1 align="left">Login</H1>
        </HeaderWrapper>
        <AuthWrapper>
          <UsernameInput />
          <PasswordInput />
          <BtnFull
            title="Return "
            onPress={() => navigation.navigate('Start')}
          />
        </AuthWrapper>
      </MainContainer>
    </SafeAreaView>
  );
};

export default LoginScreen;
