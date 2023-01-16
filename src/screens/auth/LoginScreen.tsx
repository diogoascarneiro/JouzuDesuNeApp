import React from 'react';
import {Text} from 'react-native';
import {BtnFull} from '../../components/UI/Buttons';
import {TextInputFull} from '../../components/UI/Inputs';
import {SafeAreaView} from 'react-native';

const LoginScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <Text>This is the Login page!</Text>
      <TextInputFull autoCapitalize="none" autoComplete="off" />
      <BtnFull title="goback" onPress={() => navigation.navigate('Start')} />
    </SafeAreaView>
  );
};

export default LoginScreen;
