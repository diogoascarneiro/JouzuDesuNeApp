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
  TextLink,
} from './styled.Auth';
import {SafeAreaView} from 'react-native';
import {LoginProps} from '../../utils/globalTypes';

const LoginScreen = ({navigation}: LoginProps) => {
  return (
    <SafeAreaView>
      <MainContainer>
        <LogoWrapper>
          <LogoS />
        </LogoWrapper>
        <HeaderWrapper>
          <H1 align="left">Log in</H1>
        </HeaderWrapper>
        <AuthWrapper>
          <UsernameInput />
          <PasswordInput />
          <BtnFull
            title="Log in"
            onPress={() => navigation.navigate('Start')}
          />
        </AuthWrapper>
        <TextLink onPress={() => navigation.navigate('Signup')}>
          Need to sign up? Do it here.
        </TextLink>
      </MainContainer>
    </SafeAreaView>
  );
};

export default LoginScreen;
