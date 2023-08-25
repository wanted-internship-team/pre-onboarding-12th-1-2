import React from 'react';

interface IInputProps {
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
}: IInputProps) {
  return (
    <>
      <div className='flex flex-col'>
        <label
          htmlFor={id}
          className='block text-gray-500 font-bold text-left pr-4" for="inline-full-name mb-[4px]'
        >
          {labelText}
        </label>
        <div className='mb-1'>
          <input
            className='bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500'
            type={type}
            id={id}
            data-testid={dataTestId}
            placeholder={labelText}
            value={value}
            onChange={onChange}
          />
        </div>
        {!isValid && <p className='text-red-500 text-xs'>{errorMsg}</p>}
      </div>
    </>
  );
}
