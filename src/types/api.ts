// 1-1, 1-2
// 회원가입, 로그인 요청
export interface IAuthRequest {
  email: string;
  password: string;
}

// 1-2
// 로그인 응답
export interface ISignInResponse {
  access_token: string;
}

// 2-1
// createTodo
export interface ICreateTodoRequeset {
  todo: string;
}

// 2-3
// updateTodo
export interface IUpdateTodoRequest {
  id: number;
  todo: string;
  isCompleted: boolean;
}

// 2-4
// deleteTodo
export interface IDeleteTodoRequest {
  id: number;
}
