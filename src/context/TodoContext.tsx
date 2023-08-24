import React from 'react';
import { createContext, useContext, useReducer } from 'react';
import { ITodo, ITodoList } from '../types/todo';
import { IUpdateTodoRequest, IDeleteTodoRequest } from '../types/api';

// Reducer action type
type ITodoAction =
  | { type: 'SET_TODO'; payload: ITodoList }
  | { type: 'ADD_TODO'; payload: ITodo }
  | { type: 'UPDATE_TODO'; payload: IUpdateTodoRequest }
  | { type: 'DELETE_TODO'; payload: IDeleteTodoRequest };

// Context type
interface ITodoContext {
  state: ITodoList;
  dispatch: React.Dispatch<ITodoAction>;
}

// Reducer initial state
const initialState: ITodoList = [];

// Context 선언
const todoContext = createContext<ITodoContext | undefined>(undefined);

// Reducer 선언
export const todoReducer = (state: ITodoList, action: ITodoAction): ITodoList => {
  switch (action.type) {
    case 'SET_TODO':
      return action.payload;
    case 'ADD_TODO':
      return [...state, action.payload];
    case 'UPDATE_TODO':
      return state.map((todo) => {
        if (todo.id === action.payload.id) {
          return action.payload;
        }
        return todo;
      }) as ITodoList;
    case 'DELETE_TODO':
      return state.filter((todo) => todo.id !== action.payload.id);
    default:
      return state;
  }
};

// Reducer를 감싸는 Context Provider
export const TodoProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return <todoContext.Provider value={{ state, dispatch }}>{children}</todoContext.Provider>;
};

// type error 방지를 위해 wrapper 함수를 만들어준다.
export const useTodoContext = () => {
  const context = useContext(todoContext);

  if (!context) {
    throw new Error('useTodoContext must be used within a TodoProvider');
  }

  return context;
};
