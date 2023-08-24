import { instance, accessInstance } from './axiosInstance';
import { IAuthInfo, ICreateTodoRequeset } from '../types/api';

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

export const postTodo = async ({ todo }: ICreateTodoRequeset) => {
  const res = await accessInstance.post('/todos', {
    todo,
  });
  return res;
};
