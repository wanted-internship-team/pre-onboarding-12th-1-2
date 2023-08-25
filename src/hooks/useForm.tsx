import { useState } from 'react';
import { REG } from '../constants';
import { IAuthInfo } from '../types/auth';

interface IVaildValues {
  email: boolean;
  password: boolean;
}
interface IProps {
  initialValues: IAuthInfo;
}

const useForm = ({ initialValues }: IProps) => {
  const [values, setValues] = useState<IAuthInfo>(initialValues);
  const [validValues, setValidValues] = useState<IVaildValues>({
    email: false,
    password: false,
  });

  // 유효성 검사
  const checkValidation = (name: string, value: string) => {
    setValidValues((prevValues) => ({
      ...prevValues,
      [name]: (REG as Record<string, RegExp>)[name].test(value),
    }));
  };

  const handleChange = ({ name, value }: { name: string; value: string }) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    checkValidation(name, value);
  };

  return { values, validValues, handleChange };
};

export default useForm;
