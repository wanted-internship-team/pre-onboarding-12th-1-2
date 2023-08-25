import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Form from '../../components/Auth/Form';
import { useAuthContext } from '../../context/AuthContext';

export default function SignIn() {
  const navigate = useNavigate();
  const auth = useAuthContext();

  const { values, validValues, handleChange } = useForm({
    initialValues: { email: '', password: '' },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await auth.signin(values, () => {
        alert('로그인 되었습니다!');
        navigate('/todo');
      });
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
