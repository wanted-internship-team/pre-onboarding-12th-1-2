import { useState } from 'react';
import { REG } from '../constants';
import { IAuthInfo } from '../types/api';

interface VaildValues {
  email: boolean;
  password: boolean;
}
interface Props {
  initialValues: IAuthInfo;
}

const useForm = ({ initialValues }: Props) => {
  const [values, setValues] = useState<IAuthInfo>(initialValues);
  const [isValid, setIsValid] = useState<VaildValues>({
    email: false,
    password: false,
  });

  // 유효성 검사
  const checkValidation = (name: string, value: string) => {
    setIsValid((prevValues) => ({
      ...prevValues,
      [name]: (REG as Record<string, RegExp>)[name].test(value),
    }));
  };

  const handleChange = ({ name, value }: { name: string; value: string }) => {
    setValues((prevValues) => ({ ...prevValues, [name]: value }));
    checkValidation(name, value);
  };

  return { values, isValid, handleChange };
};

export default useForm;
