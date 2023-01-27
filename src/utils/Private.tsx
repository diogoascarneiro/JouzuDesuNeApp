import {useContext} from 'react';
import {UserContext} from '../context/UserContext';
import Loading from './Loading';

export const IsPrivate = ({navigation, children}: any) => {
  const {isLoggedIn, isLoading} = useContext(UserContext);

  if (isLoading) return <Loading />;

  if (!isLoggedIn) {
    navigation.navigate('Start');
  }
  return children;
};
