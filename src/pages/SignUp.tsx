import React from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignUp } from '../api/requests';
import useForm from '../hooks/useForm';
import Form from '../components/auth/Form';

export default function SignUp() {
  const navigate = useNavigate();

  const { values, validValues, handleChange } = useForm({
    initialValues: { email: '', password: '' },
  });

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
      <Form
        values={values}
        validValues={validValues}
        handleSubmit={handleSubmit}
        handleChange={handleChange}
        pageName='signUp'
      />
    </>
  );
}
