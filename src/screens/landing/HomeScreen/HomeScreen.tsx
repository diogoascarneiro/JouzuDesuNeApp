import {SafeAreaView} from 'react-native-safe-area-context';
import {Container, P, BtnFull} from './styled.HomeScreen';
import {UserContext} from '../../../context/UserContext';
import {useContext} from 'react';

// interface HomeScreenProps {}

const HomeScreen = ({navigation}: any) => {
  const {logoutUser} = useContext(UserContext);

  return (
    <SafeAreaView>
      <Container>
        <P>Home Screen</P>

        <BtnFull title="Log out" onPress={() => logoutUser()} />
      </Container>
    </SafeAreaView>
  );
};

export default HomeScreen;
