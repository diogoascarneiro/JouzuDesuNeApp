import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoggedInStackParams} from '../utils/globalTypes';
import HomeScreen from '../screens/landing/HomeScreen/HomeScreen';
import HowToScreen from '../screens/landing/HowToScreen';
import DeckListScreen from '../screens/decks/DeckListScreen';

const LoggedInRoutes = () => {
  const LoggedInTabs = createBottomTabNavigator();

  return (
    <LoggedInTabs.Navigator>
      <LoggedInTabs.Screen name="Home" component={HomeScreen} />
      <LoggedInTabs.Screen name="How to" component={HowToScreen} />
      <LoggedInTabs.Screen name="All decks" component={DeckListScreen} />
    </LoggedInTabs.Navigator>
  );
};

export default LoggedInRoutes;
