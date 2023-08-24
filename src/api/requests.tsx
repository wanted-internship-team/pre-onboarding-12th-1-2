import React from 'react';
import { instance } from './axiosInstance';
import { IAuthInfo } from '../types/api';

export const postSignUp = async ({ email, password }: IAuthInfo) => {
  const response = await instance.post('/auth/signup', {
    email,
    password,
  });
  return response.data;
};
