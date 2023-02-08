import Link from 'next/link';
import React from 'react';

interface MenuItemProps {
  href: string;
  label: string;
}

export function MenuItem({ href, label }: MenuItemProps) {
  return (
    <Link className='hover:text-cyan-700' href={href}>
      {label}
    </Link>
  );
}
