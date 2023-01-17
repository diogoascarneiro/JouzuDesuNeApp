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
import {SignupProps} from '../../utils/globalTypes';

const SignupScreen = ({navigation}: SignupProps) => {
  return (
    <SafeAreaView>
      <MainContainer>
        <LogoWrapper>
          <LogoS />
        </LogoWrapper>
        <HeaderWrapper>
          <H1 align="left">Sign up</H1>
        </HeaderWrapper>
        <AuthWrapper>
          <UsernameInput />
          <PasswordInput />
          <BtnFull
            title="Sign up"
            onPress={() => navigation.navigate('Start')}
          />
        </AuthWrapper>
        <TextLink onPress={() => navigation.navigate('Login')}>
          Already signed up? Log in here.
        </TextLink>
      </MainContainer>
    </SafeAreaView>
  );
};

export default SignupScreen;
