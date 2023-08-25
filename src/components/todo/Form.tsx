import React, { useState } from 'react';
import { useTodoContext } from '../../context/TodoContext';
import { postTodo } from '../../api/requests';
import { DATA_TEST_ID } from '../../constants';
import Input from '../../components/todo/Input';

export default function Form() {
  const { dispatch } = useTodoContext();
  const [todo, setTodo] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!todo) {
      return alert('할 일을 입력해주세요');
    }

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

  return (
    <form
      onSubmit={handleSubmit}
      className='flex justify-between gap-x-4 w-full border border-gray-300 rounded-[8px] pl-[12px] pr-[4px] mt-[16px] mb-[24px]'
    >
      <Input id='todo' dataTestId={DATA_TEST_ID.INPUT.TODO} value={todo} onChange={handleChange} />
      <button
        type='submit'
        data-testid={DATA_TEST_ID.BUTTON.TODO_ADD}
        className='text-blue-600 p-2 bg-white font-semibold'
      >
        추가
      </button>
    </form>
  );
}
