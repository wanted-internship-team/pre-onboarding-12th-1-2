// 기본 Todo
export interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

// 전체 Todo
export type ITodoList = ITodo[];

// apis
// 2-1 createTodo
export interface ICreateTodoRequeset {
  todo: string;
}

// 2-3 updateTodo
export interface IUpdateTodoRequest {
  id: number;
  todo: string;
  isCompleted: boolean;
}

// 2-4 deleteTodo
export interface IDeleteTodoRequest {
  id: number;
}
