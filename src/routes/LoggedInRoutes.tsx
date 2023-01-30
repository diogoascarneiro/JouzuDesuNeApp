import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabRoutes from './BottomTabRoutes';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {LoggedInStackParams} from '../utils/globalTypes';
import DeckSessionScreen from '../screens/decks/DeckSessionScreen/DeckSessionScreen';

const LoggedInRoutes = () => {
  const LoggedInStack = createNativeStackNavigator<LoggedInStackParams>();

  return (
    <LoggedInStack.Navigator>
      <LoggedInStack.Screen name="BottomTabs" component={BottomTabRoutes} />
      <LoggedInStack.Screen name="DeckSession" component={DeckSessionScreen} />
    </LoggedInStack.Navigator>
  );
};

export default LoggedInRoutes;
