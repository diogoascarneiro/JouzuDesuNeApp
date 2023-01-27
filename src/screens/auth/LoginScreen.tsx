import {useContext, useState} from 'react';

import {EmailInput, PasswordInput} from '../../components/UI/Inputs';
import {
  MainContainer,
  BtnFull,
  H1,
  AuthWrapper,
  HeaderWrapper,
  NavWrapper,
  LogoS,
  LogoWrapper,
  TextLink,
  ErrorText,
} from './styled.Auth';
import Icon from 'react-native-vector-icons/Ionicons';
import {SafeAreaView} from 'react-native';
import {LoginProps} from '../../utils/globalTypes';
import {login} from '../../api/api';
import {UserContext} from '../../context/UserContext';

const LoginScreen = ({navigation}: LoginProps) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {isLoggedIn, storeToken, authenticateUser} = useContext(UserContext);

  // if (isLoggedIn) {
  //   navigation.navigate('Home');
  // }

  const handleLogin = async () => {
    setIsSubmitting(true);
    setError('');
    try {
      const res = await login({email, password});
      storeToken(res.data.authToken);
      authenticateUser();
      //navigation.navigate('Home');
    } catch (e: any) {
      console.log(e);
      setError(e.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SafeAreaView>
      <NavWrapper>
        <Icon
          name="arrow-back"
          size={30}
          onPress={() => navigation.navigate('Start')}
        />
      </NavWrapper>
      <MainContainer>
        <LogoWrapper>
          <LogoS />
        </LogoWrapper>
        <HeaderWrapper>
          <H1 align="left">Log in</H1>
        </HeaderWrapper>
        <AuthWrapper>
          <EmailInput value={email} onChangeText={setEmail} />
          <PasswordInput value={password} onChangeText={setPassword} />
          <ErrorText>{error}</ErrorText>
          <BtnFull
            title={isSubmitting ? 'Logging in...' : 'Log in'}
            onPress={handleLogin}
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
