import React from 'react';
import { instance } from './axiosInstance';
import { IAuthInfo, ISignInResponse } from '../types/api';

export const postSignUp = async ({ email, password }: IAuthInfo) => {
  const res = await instance.post('/auth/signup', {
    email,
    password,
  });
  return res;
};

export const postSignIn = async ({ email, password }: IAuthInfo) => {
  const res = await instance.post('/auth/signin', {
    email,
    password,
  });
  return res;
};
