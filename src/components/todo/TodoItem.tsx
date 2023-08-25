import React, { useState } from 'react';
import { DATA_TEST_ID } from '../../constants';
import { ITodo, IUpdateTodoRequest, IDeleteTodoRequest } from '../../types/todo';

interface IToDoItemProps {
  todoData: ITodo;
  onClickUpdate: ({ id, todo, isCompleted }: IUpdateTodoRequest) => void;
  onClickDelete: (id: IDeleteTodoRequest) => void;
}

export default function TodoItem({ todoData, onClickUpdate, onClickDelete }: IToDoItemProps) {
  const [isEditMode, setIsEditMode] = useState<boolean>(false);
  const { id, todo, isCompleted } = todoData;
  // 상태값 관리
  const [editTodo, setEditTodo] = useState(todo);

  const handleClickSubmit = () => {
    if (!editTodo) {
      alert('내용을 입력해주세요.');
      return;
    }
    onClickUpdate({ id, todo: editTodo, isCompleted });
    setIsEditMode(false);
  };

  const handleClickCancel = () => {
    setEditTodo(todo);
    setIsEditMode(false);
  };

  return (
    <>
      <li className='py-2 flex flex-row gap-2.5 justify-start items-center'>
        <input
          type='checkbox'
          checked={isCompleted}
          onChange={() => {
            onClickUpdate({ id, todo, isCompleted: !isCompleted });
          }}
          className='shrink-0 w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600'
        />
        {!isEditMode ? (
          <div className='min-w-[100px] flex justify-between flex-grow'>
            <p className='max-w-[520px] border-transparent border-b-2 text-ellipsis overflow-hidden whitespace-nowrap'>
              {todo}
            </p>
            <div className='shrink-0'>
              <button
                type='button'
                data-test-id={DATA_TEST_ID.BUTTON.TODO_MODIFY}
                onClick={() => setIsEditMode(true)}
                className='bg-blue-400 hover:bg-blue-500 text-xs text-white font-medium py-1 px-2 mx-1 rounded focus:outline-none focus:shadow-outline'
              >
                수정
              </button>
              <button
                type='button'
                data-test-id={DATA_TEST_ID.BUTTON.TODO_DELETE}
                onClick={() => onClickDelete({ id })}
                className='bg-red-400 hover:bg-red-500 text-xs text-white font-medium py-1 px-2 mx-1 rounded focus:outline-none focus:shadow-outline'
              >
                삭제
              </button>
            </div>
          </div>
        ) : (
          <div className='flex justify-between flex-grow'>
            <input
              className='border-blue-400 border-b-2 focus:outline-none'
              type='text'
              data-test-id={DATA_TEST_ID.INPUT.MODIFY_TODO}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setEditTodo(e.target.value);
              }}
              value={editTodo}
              autoFocus
            />
            <div className='shrink-0'>
              <button
                type='button'
                data-test-id={DATA_TEST_ID.BUTTON.TODO_SUBMIT}
                onClick={handleClickSubmit}
                className='bg-blue-400 hover:bg-blue-500 text-xs text-white font-medium py-1 px-2 mx-1 rounded focus:outline-none focus:shadow-outline'
              >
                제출
              </button>
              <button
                type='button'
                data-test-id={DATA_TEST_ID.BUTTON.TODO_CANCEL}
                onClick={handleClickCancel}
                className='bg-red-400 hover:bg-red-500 text-xs text-white font-medium py-1 px-2 mx-1 rounded focus:outline-none focus:shadow-outline'
              >
                취소
              </button>
            </div>
          </div>
        )}
      </li>
    </>
  );
}
