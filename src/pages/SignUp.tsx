import React from 'react';
import { Link } from 'react-router-dom';
import { DATA_TEST_ID } from '../constants';
import { URL } from '../constants';
import Input from '../components/auth/Input';
import useForm from '../hooks/useForm';

export default function SignUp() {
  const { values, isValid, handleChange } = useForm({ initialValues: { email: '', password: '' } });

  return (
    <>
      <h1>회원가입</h1>
      <form className='w-full max-w-sm gap-4'>
        <Input
          id='email'
          type='email'
          labelText='이메일'
          value={values.email}
          isValid={isValid.email}
          dataTestId={DATA_TEST_ID.INPUT.EMAIL}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ name: e.target.id, value: e.target.value })
          }
          errorMsg='@를 포함해 주세요'
        />
        <Input
          id='password'
          type='password'
          labelText='비밀번호'
          value={values.password}
          isValid={isValid.password}
          dataTestId={DATA_TEST_ID.INPUT.PASSWORD}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ name: e.target.id, value: e.target.value })
          }
          errorMsg='8자 이상으로 입력해 주세요'
        />
        <button
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
          type='submit'
          data-testid={DATA_TEST_ID.BUTTON.TODO_SUBMIT}
        >
          가입하기
        </button>
        <p>
          이미 계정이 있으신가요?{' '}
          <Link to={URL.SIGN_IN} className='text-blue-500 italic'>
            로그인하기
          </Link>
        </p>
      </form>
    </>
  );
}
