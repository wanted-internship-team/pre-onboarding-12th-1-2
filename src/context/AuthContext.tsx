import React from 'react';
import { createContext, useContext, useState } from 'react';
import { postSignUp, postSignIn } from '../api/requests';
import { IAuthInfo } from '../types/api';
import { AxiosResponse } from 'axios';

type AuthProviderProps = {
  token: string | null;
  signup: ({ email, password }: IAuthInfo, callback?: () => void) => Promise<AxiosResponse>;
  signin: ({ email, password }: IAuthInfo, callback?: () => void) => Promise<void>;
};

// context
export const authContext = createContext<AuthProviderProps | null>(null);

// context를 저장하는 provider
export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [token, setToken] = useState(localStorage.getItem('access_token'));

  const signup = ({ email, password }: IAuthInfo, callback?: () => void) => {
    return postSignUp({ email, password }).then((res) => {
      if (callback) callback();
      return res;
    });
  };

  const signin = ({ email, password }: IAuthInfo, callback?: () => void) => {
    return postSignIn({ email, password }).then(({ access_token }) => {
      setToken(access_token);
      localStorage.setItem('access_token', access_token);
      if (callback) callback();
    });
  };

  const value: AuthProviderProps = { token, signin, signup };
  return <authContext.Provider value={value}>{children}</authContext.Provider>;
};

// useAuthContext 훅
export const useAuthContext = () => {
  const context = useContext(authContext);

  if (!context) {
    throw new Error('useAuthContext should be used within authContextProvider');
  }

  return context;
};
