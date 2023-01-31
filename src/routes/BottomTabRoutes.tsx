import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoggedInStackParams} from '../utils/globalTypes';
import HomeScreen from '../screens/landing/HomeScreen/HomeScreen';
import HowToScreen from '../screens/landing/HowToScreen';
import DeckListScreen from '../screens/decks/DeckListScreen/DeckListScreen';

const BottomTabRoutes = () => {
  const BottomTabs = createBottomTabNavigator();

  return (
    <BottomTabs.Navigator screenOptions={{headerShown: false}}>
      <BottomTabs.Screen name="Home" component={HomeScreen} />
      <BottomTabs.Screen name="How to" component={HowToScreen} />
      <BottomTabs.Screen name="All decks" component={DeckListScreen} />
    </BottomTabs.Navigator>
  );
};

export default BottomTabRoutes;
