import React from 'react';
import { Link } from 'react-router-dom';
import { DATA_TEST_ID } from '../constants';
import { URL } from '../constants';
import Input from '../components/auth/Input';
import useForm from '../hooks/useForm';
import { postSignUp } from '../api/requests';
import { useNavigate } from 'react-router-dom';
import { AxiosError } from 'axios';

export default function SignUp() {
  const navigate = useNavigate();
  const { values, validValues, handleChange } = useForm({
    initialValues: { email: '', password: '' },
  });

  const isButtonEnabled = validValues.email && validValues.password;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await postSignUp(values);
      if (res.status === 201) {
        alert('회원가입이 완료되었습니다. 로그인을 진행해주세요.');
        navigate('/signin');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>회원가입</h1>
      <form className='w-full max-w-sm gap-4' onSubmit={handleSubmit}>
        <Input
          id='email'
          type='email'
          labelText='이메일'
          value={values.email}
          isValid={validValues.email}
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
          isValid={validValues.password}
          dataTestId={DATA_TEST_ID.INPUT.PASSWORD}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleChange({ name: e.target.id, value: e.target.value })
          }
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
