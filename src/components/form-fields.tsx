import React, { HTMLInputTypeAttribute } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
}

function FormField({ label, name, type }: FormFieldProps) {
  return (
    <div className='flex w-full flex-col'>
      <label className='w-[200px]' htmlFor={name}>
        {label}
      </label>
      <input
        className='h-10 w-full border border-primary pl-3 pr-3 focus-visible:border-2 focus-visible:outline-none'
        type={type}
        name={name}
        id={name}
      />
    </div>
  );
}

export const FormTextField = (props: Omit<FormFieldProps, 'type'>) => (
  <FormField {...props} type='text' />
);

export const FormDateField = (props: Omit<FormFieldProps, 'type'>) => (
  <FormField {...props} type='date' />
);
