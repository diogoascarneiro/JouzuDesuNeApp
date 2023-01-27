import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoggedInStackParams} from '../utils/globalTypes';
import HomeScreen from '../screens/landing/HomeScreen/HomeScreen';

const LoggedInRoutes = () => {
  const LoggedInStack = createNativeStackNavigator<LoggedInStackParams>();

  return (
    <LoggedInStack.Navigator initialRouteName="Home">
      <LoggedInStack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </LoggedInStack.Navigator>
  );
};

export default LoggedInRoutes;
