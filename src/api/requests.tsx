import { instance, accessInstance } from './axiosInstance';
import {
  IAuthInfo,
  ICreateTodoRequeset,
  IUpdateTodoRequest,
  IDeleteTodoRequest,
} from '../types/api';
import { ITodoList, ITodo } from '../types/todo';

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

export const getTodoList = async (): Promise<ITodoList> => {
  const res = await accessInstance.get('/todos');
  return res.data;
};

export const putTodo = async ({ id, todo, isCompleted }: IUpdateTodoRequest): Promise<ITodo> => {
  const res = await accessInstance.put(`/todos/${id}`, {
    todo,
    isCompleted,
  });
  return res.data;
};

export const deleteTodo = async ({ id }: IDeleteTodoRequest) => {
  const res = await accessInstance.delete(`/todos/${id}`);
  return res;
};
