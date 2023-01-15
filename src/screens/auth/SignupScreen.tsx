import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {BtnFull} from '../../components/UI/Buttons';
//interface SignupProps {}

const SignupScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Text>Signup</Text>
      <BtnFull title="goback" onPress={() => navigation.navigate('Start')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default SignupScreen;
