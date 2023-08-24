import React from 'react';

interface InputProps {
  id: string;
  type: string;
  labelText: string;
  dataTestId: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
  isValid: boolean;
  errorMsg: string;
}

export default function Input({
  id,
  type,
  labelText,
  value,
  dataTestId,
  onChange,
  isValid,
  errorMsg,
}: InputProps) {
  return (
    <>
      <div className='md:flex md:items-center mb-6'>
        <div className='md:w-1/3'>
          <label
            htmlFor={dataTestId}
            className='block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" for="inline-full-name'
          >
            {labelText}
          </label>
        </div>
        <div className='md:w-1/3 mb-1'>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            type={type}
            id={id}
            data-testid={dataTestId}
            placeholder={labelText}
            value={value}
            onChange={onChange}
            // autoFocus
          />
        </div>
        {!isValid && <p className='text-red-500 text-xs italic'>{errorMsg}</p>}
      </div>
    </>
  );
}
