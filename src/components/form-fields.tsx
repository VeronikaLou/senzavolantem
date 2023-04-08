import React, { HTMLInputTypeAttribute } from 'react';

interface FormFieldProps {
  label: string;
  name: string;
  type: HTMLInputTypeAttribute;
}

function FormField({ label, name, type }: FormFieldProps) {
  return (
    <div className='flex w-full flex-col gap-2'>
      <label className='w-[200px] text-sm font-semibold uppercase text-slate-600' htmlFor={name}>
        {label}
      </label>
      <input
        className='h-12 w-full rounded-xl border border-primary pl-3 pr-3 focus-visible:border-2 focus-visible:outline-none'
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

export const FormCustomField = ({ value, label }: { label: string; value: string }) => (
  <div className='flex w-full flex-col'>
    <label className='w-[200px] text-sm text-slate-600'>{label}</label>
    <label className=' flex h-12 w-full items-center border border-primary pl-3 pr-3 focus-visible:border-2 focus-visible:outline-none'>
      {value}
    </label>
  </div>
);
