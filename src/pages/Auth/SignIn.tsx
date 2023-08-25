import React from 'react';
import { useNavigate } from 'react-router-dom';
import useForm from '../../hooks/useForm';
import Form from '../../components/auth/Form';
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
        navigate('/todo');
      });
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className='bg-black-100 mt-[160px]'>
      <div className='w-[460px] my-0 mx-auto rounded-[16px] bg-white p-[20px]'>
        <h1 className='mb-[24px] font-bold text-[24px]'>로그인</h1>
        <Form
          handleSubmit={handleSubmit}
          values={values}
          validValues={validValues}
          handleChange={handleChange}
          pageName='signIn'
        />
      </div>
    </div>
  );
}
