import LoggedInRoutes from './LoggedInRoutes';
import LoggedOutRoutes from './LoggedOutRoutes';
import {useContext} from 'react';
import {UserContext} from '../context/UserContext';
import Loading from '../utils/Loading';

const Routes = () => {
  const {isLoggedIn, isLoading} = useContext(UserContext);

  if (isLoading) return <Loading />;

  return isLoggedIn ? <LoggedInRoutes /> : <LoggedOutRoutes />;
};

export default Routes;
