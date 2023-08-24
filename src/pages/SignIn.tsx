import React from 'react';
import { useNavigate } from 'react-router-dom';
import { postSignIn } from '../api/requests';
import useForm from '../hooks/useForm';
import Form from '../components/auth/Form';

export default function SignIn() {
  const navigate = useNavigate();

  const { values, validValues, handleChange } = useForm({
    initialValues: { email: '', password: '' },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await postSignIn(values);
      if (res.status === 200) {
        alert('로그인 되었습니다!');
        localStorage.setItem('access_token', res.data.access_token);
        navigate('/todo');
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <h1>로그인</h1>
      <Form
        handleSubmit={handleSubmit}
        values={values}
        validValues={validValues}
        handleChange={handleChange}
        pageName='signIn'
      />
    </>
  );
}
