import React, { useEffect } from 'react';
import { getTodoList } from '../../api/requests';
import TodoList from '../../components/todo/TodoList';
import { useTodoContext } from '../../context/TodoContext';
import Form from '../../components/todo/Form';

export default function Todo() {
  const { dispatch } = useTodoContext();

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
    <div className='bg-black-100 mt-[160px]'>
      <div className='w-[460px] my-0 mx-auto rounded-[16px] bg-white p-[20px]'>
        <h1 className='mb-[24px] font-bold text-[24px]'>오늘의 할 일</h1>
        <Form />
        <TodoList />
      </div>
    </div>
  );
}
