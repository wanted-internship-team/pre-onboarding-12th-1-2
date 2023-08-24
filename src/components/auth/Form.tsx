import React from 'react';
import { Link } from 'react-router-dom';
import Input from './Input';
import { DATA_TEST_ID, URL } from '../../constants';
import { IAuthInfo } from '../../types/api';
import { IVaildValues } from '../../types/auth';

interface IFormProps {
  values: IAuthInfo;
  validValues: IVaildValues;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  handleChange: ({ name, value }: { name: string; value: string }) => void;
  pageName: string;
}

export default function Form({
  values,
  validValues,
  handleSubmit,
  handleChange,
  pageName,
}: IFormProps) {
  const isButtonEnabled = validValues.email && validValues.password;

  return (
    <div>
      <form className='w-full max-w-sm gap-4' onSubmit={handleSubmit}>
        <Input
          id='email'
          type='email'
          labelText='이메일'
          value={values.email}
          isValid={validValues.email}
          dataTestId={DATA_TEST_ID.INPUT.EMAIL}
          onChange={(e) => handleChange({ name: 'email', value: e.target.value })}
          errorMsg='@를 포함해 주세요'
        />
        <Input
          id='password'
          type='password'
          labelText='비밀번호'
          value={values.password}
          isValid={validValues.password}
          dataTestId={DATA_TEST_ID.INPUT.PASSWORD}
          onChange={(e) => handleChange({ name: 'password', value: e.target.value })}
          errorMsg='8자 이상으로 입력해 주세요'
        />
        <button
          className={`${
            isButtonEnabled
              ? 'bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              : 'bg-gray-500 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-not-allowed'
          }`}
          type='submit'
          data-testid={DATA_TEST_ID.BUTTON.TODO_SUBMIT}
          disabled={!isButtonEnabled}
        >
          {pageName === 'signIn' ? '로그인' : '회원가입'}
        </button>
        {pageName === 'signIn' ? (
          <p>
            계정이 없으신가요?{' '}
            <Link to={URL.SIGN_UP} className='text-blue-500 italic'>
              가입하기
            </Link>
          </p>
        ) : (
          <p>
            이미 계정이 있으신가요?{' '}
            <Link to={URL.SIGN_IN} className='text-blue-500 italic'>
              로그인하기
            </Link>
          </p>
        )}
      </form>
    </div>
  );
}
