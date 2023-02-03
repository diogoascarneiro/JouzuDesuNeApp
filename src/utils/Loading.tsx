import {SafeAreaView} from 'react-native-safe-area-context';
import {H1} from '../components/UI/Text';

//TODO: Add a check for internet connection
const Loading = () => {
  return (
    <SafeAreaView>
      <H1>Loading...</H1>
    </SafeAreaView>
  );
};

export default Loading;
