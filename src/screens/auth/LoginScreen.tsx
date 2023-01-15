import React from 'react';
import {Text} from 'react-native';
import {BtnFull} from '../../components/UI/Buttons';

const LoginScreen = ({navigation}) => {
  return (
    <>
      <Text>This is the Login page!</Text>
      <BtnFull title="goback" onPress={() => navigation.navigate('Start')} />
    </>
  );
};

export default LoginScreen;
