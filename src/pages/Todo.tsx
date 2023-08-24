import React, { useState } from 'react';
import Input from '../components/todo/Input';
import { DATA_TEST_ID } from '../constants';
import { postTodo } from '../api/requests';

export default function Todo() {
  const [todo, setTodo] = useState<string>('');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await postTodo({ todo });
      if (res.status === 200) {
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
    <>
      <h1>오늘의 할 일</h1>
      <form onSubmit={handleSubmit}>
        <Input
          id='todo'
          dataTestId={DATA_TEST_ID.INPUT.TODO}
          value={todo}
          onChange={handleChange}
        />
        <button type='submit' data-testid={DATA_TEST_ID.BUTTON.TODO_ADD}>
          추가
        </button>
      </form>
    </>
  );
}
