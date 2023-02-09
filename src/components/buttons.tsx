import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React, { MouseEventHandler } from 'react';

interface ButtonProps {
  label: string;
  onClick?: MouseEventHandler | undefined;
  type?: 'submit' | 'reset' | 'button';
}

interface LinkButtonProps extends ButtonProps {
  href: string;
}

export function Button({ label, onClick, type = 'button' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      type={type}
      className='w-fit rounded-full bg-primary p-3 text-white hover:cursor-pointer hover:bg-cyan-700'
    >
      {label}
    </button>
  );
}

export function LinkButton({ label, href }: LinkButtonProps) {
  return (
    <Link className='rounded-full bg-primary p-3 text-white hover:bg-cyan-700' href={href}>
      {label}
    </Link>
  );
}

export function IconButton({ color = 'white', size = 'xl', ...props }: FontAwesomeIconProps) {
  return <FontAwesomeIcon className='hover:cursor-pointer' size={size} color={color} {...props} />;
}
