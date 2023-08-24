import React from 'react';

interface IInputProps {
  id: string;
  type?: string;
  dataTestId: string;
  onChange(e: React.ChangeEvent<HTMLInputElement>): void;
  value?: string;
}

export default function Input({ id, type = 'text', dataTestId, value, onChange }: IInputProps) {
  return (
    <div className='flex-grow'>
      <label>
        <input
          className='w-full bg-white appearance-none border-0 h-[42px] text-gray-700 leading-tight focus:outline-none focus:border-blue-400'
          type={type}
          id={id}
          data-testid={dataTestId}
          value={value}
          onChange={onChange}
        />
      </label>
    </div>
  );
}
