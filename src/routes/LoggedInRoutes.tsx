import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoggedInStackParams} from '../utils/globalTypes';
import HomeScreen from '../screens/landing/HomeScreen/HomeScreen';
import HowToScreen from '../screens/landing/HowToScreen';

const LoggedInRoutes = () => {
  // const LoggedInStack = createNativeStackNavigator<LoggedInStackParams>();
  const LoggedInTabs = createBottomTabNavigator();

  // return (
  //   <LoggedInStack.Navigator initialRouteName="Home">
  //     <LoggedInStack.Screen
  //       name="Home"
  //       component={HomeScreen}
  //       options={{headerShown: false}}
  //     />
  //   </LoggedInStack.Navigator>
  // );
  return (
    <LoggedInTabs.Navigator>
      <LoggedInTabs.Screen name="Home" component={HomeScreen} />
      <LoggedInTabs.Screen name="How to" component={HowToScreen} />
    </LoggedInTabs.Navigator>
  );
};

export default LoggedInRoutes;
