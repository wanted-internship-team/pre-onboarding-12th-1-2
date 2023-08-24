// 기본 Todo
export interface ITodo {
  id: number;
  todo: string;
  isCompleted: boolean;
  userId: number;
}

// 전체 Todo
export type ITodoList = ITodo[];
