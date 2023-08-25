import React from 'react';
import { deleteTodo, putTodo } from '../../api/requests';
import { ITodo } from '../../types/todo';
import TodoItem from '../todo/TodoItem';
import { IUpdateTodoRequest, IDeleteTodoRequest } from '../../types/api';
import { useTodoContext } from '../../context/TodoContext';

export default function TodoList() {
  const { state: todoList, dispatch } = useTodoContext();

  const handleUpdate = async ({ id, todo, isCompleted }: IUpdateTodoRequest) => {
    try {
      dispatch({ type: 'UPDATE_TODO', payload: { id, todo, isCompleted } });
      await putTodo({ id, todo, isCompleted });
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id: IDeleteTodoRequest) => {
    try {
      dispatch({ type: 'DELETE_TODO', payload: id });
      await deleteTodo(id);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <ul className='list-none list-inside'>
      {todoList.map((todoData: ITodo) => (
        <TodoItem
          key={todoData.id}
          todoData={todoData}
          onClickUpdate={handleUpdate}
          onClickDelete={handleDelete}
        />
      ))}
    </ul>
  );
}
