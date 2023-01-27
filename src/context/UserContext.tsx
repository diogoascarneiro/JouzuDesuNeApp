import React, {createContext, ReactNode, useEffect, useState} from 'react';
import {storage} from '../utils/mmkv';
import {verify} from '../api/api';
import {UserShape} from '../utils/globalTypes';

interface UserContextShape {
  user: UserShape | null;
  setUser:
    | React.Dispatch<React.SetStateAction<null>>
    | React.Dispatch<React.SetStateAction<UserShape>>;
  isLoggedIn: boolean;
  storeToken: (token: string) => void;
  authenticateUser: () => void;
  logoutUser: () => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextShape>({} as UserContextShape);

const UserProviderWrapper = ({children}: {children: ReactNode}) => {
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const storeToken = (token: string) => {
    storage.set('authToken', token);
  };
  const removeToken = () => {
    storage.delete('authToken');
  };

  const authenticateUser = () => {
    const storedToken = storage.getString('authToken');
    if (storedToken) {
      (async () => {
        try {
          const response = await verify(storedToken);
          const userData = response.data;
          setUser(userData);
          setIsLoggedIn(true);
        } catch (e) {
          setUser(null);
          setIsLoggedIn(false);
        } finally {
          setIsLoading(false);
        }
      })();
    } else {
      setUser(null);
      setIsLoggedIn(false);
      setIsLoading(false);
    }
  };

  const logoutUser = () => {
    removeToken();
    authenticateUser();
  };

  useEffect(() => {
    authenticateUser();
  }, []);

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        isLoggedIn,
        storeToken,
        authenticateUser,
        logoutUser,
        isLoading,
      }}>
      {children}
    </UserContext.Provider>
  );
};

export {UserContext, UserProviderWrapper};
