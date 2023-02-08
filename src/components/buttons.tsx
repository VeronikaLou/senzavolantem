import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import React from 'react';

interface ButtonProps {
  label: string;
}

interface LinkButtonProps extends ButtonProps {
  href: string;
}

export function Button({ label }: ButtonProps) {
  return (
    <div className='rounded-xl bg-primary text-white hover:cursor-pointer hover:bg-cyan-700'>
      {label}
    </div>
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
