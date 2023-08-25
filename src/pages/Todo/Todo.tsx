import React, { useState, useEffect } from 'react';
import Input from '../../components/todo/Input';
import { DATA_TEST_ID } from '../../constants';
import { postTodo, getTodoList } from '../../api/requests';
import TodoList from '../../components/todo/TodoList';
import { useTodoContext } from '../../context/TodoContext';

export default function Todo() {
  const { dispatch } = useTodoContext();
  const [todo, setTodo] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await postTodo({ todo });
      if (res.status === 201) {
        dispatch({ type: 'ADD_TODO', payload: res.data });
        setTodo('');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.target.value);
  };

  useEffect(() => {
    const fetchTodoList = async () => {
      try {
        const res = await getTodoList();
        dispatch({ type: 'SET_TODO', payload: res });
      } catch (err) {
        console.error(err);
      }
    };
    fetchTodoList();
  }, []);

  return (
    <div className='max-w-3xl'>
      <h1 className='font-semibold text-[24px]'>오늘의 할 일</h1>
      <form
        onSubmit={handleSubmit}
        className='flex justify-between gap-x-4 w-full border border-gray-300 rounded-[8px] pl-[12px] pr-[4px] mt-[16px] mb-[24px]'
      >
        <Input
          id='todo'
          dataTestId={DATA_TEST_ID.INPUT.TODO}
          value={todo}
          onChange={handleChange}
        />
        <button
          type='submit'
          data-testid={DATA_TEST_ID.BUTTON.TODO_ADD}
          className='text-blue-600 p-2 bg-white font-semibold'
        >
          추가
        </button>
      </form>
      <TodoList />
    </div>
  );
}
