import {useContext, useState} from 'react';
import {UserContext} from '../../context/UserContext';
import {
  UsernameInput,
  PasswordInput,
  EmailInput,
} from '../../components/UI/Inputs';
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
import {SignupProps} from '../../utils/globalTypes';
import {signup} from '../../api/api';

const SignupScreen = ({navigation}: SignupProps) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  // const {isLoggedIn} = useContext(UserContext);

  // if (isLoggedIn) {
  //   navigation.navigate('Home');
  // }

  const handleSignup = async () => {
    // if (profilePicture) {
    // const profPic = new FormData();
    // profPic.append("file", profilePicture);
    // const response = await upload(profPic);
    // await signup({
    //   username,
    //   email,
    //   password,
    //   profilePicture: response.data.fileUrl
    // });
    setIsSubmitting(true);
    setError('');
    try {
      await signup({
        username,
        email,
        password,
      });
    } catch (e: any) {
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
          <H1 align="left">Sign up</H1>
        </HeaderWrapper>
        <AuthWrapper>
          <UsernameInput value={username} onChangeText={setUsername} />
          <EmailInput value={email} onChangeText={setEmail} />
          <PasswordInput value={password} onChangeText={setPassword} />
          <ErrorText>{error}</ErrorText>
          <BtnFull
            title={isSubmitting ? 'Signing up...' : 'Sign up'}
            onPress={handleSignup}
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
