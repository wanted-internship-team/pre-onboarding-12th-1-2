import React from 'react';
import { createContext, useContext, useState } from 'react';
import { postSignUp, postSignIn } from '../api/requests';
import { IAuthInfo } from '../types/auth';
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

  const signup = async ({ email, password }: IAuthInfo, callback?: () => void) => {
    try {
      const res = await postSignUp({ email, password });
      if (res.status === 201) {
        alert('회원가입이 완료되었습니다. 로그인을 진행해주세요.');
        if (callback) callback();
      }
      return res;
    } catch (error) {
      // 에러 처리
      console.error('Signup failed:', error);
      throw error; // 에러를 다시 던지거나 다른 처리를 할 수 있습니다.
    }
  };

  const signin = ({ email, password }: IAuthInfo, callback?: () => void) => {
    return postSignIn({ email, password }).then(({ access_token }) => {
      setToken(access_token);
      localStorage.setItem('access_token', access_token);
      alert('로그인 되었습니다!');
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
