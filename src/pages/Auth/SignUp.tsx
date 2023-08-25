import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Form from '../../components/auth/Form';
import { useAuthContext } from '../../context/AuthContext';

export default function SignUp() {
  const navigate = useNavigate();
  const auth = useAuthContext();

  const { values, validValues, handleChange } = useForm({
    initialValues: { email: '', password: '' },
  });

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await auth.signup(values, () => {
        navigate('/signin');
      });
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
