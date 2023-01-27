import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoggedOutStackParams} from '../utils/globalTypes';

import StartScreen from '../screens/landing/StartScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import SignupScreen from '../screens/auth/SignupScreen';

const LoggedOutRoutes = () => {
  const LoggedOutStack = createNativeStackNavigator<LoggedOutStackParams>();
  return (
    <LoggedOutStack.Navigator initialRouteName="Start">
      <LoggedOutStack.Screen
        name="Start"
        component={StartScreen}
        options={{headerShown: false}}
      />
      <LoggedOutStack.Screen
        name="Login"
        component={LoginScreen}
        options={{headerShown: false}}
      />
      <LoggedOutStack.Screen
        name="Signup"
        component={SignupScreen}
        options={{headerShown: false}}
      />
    </LoggedOutStack.Navigator>
  );
};

export default LoggedOutRoutes;
