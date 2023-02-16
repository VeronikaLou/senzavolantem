import { LinkButton } from './buttons';
import { MenuItem } from './menu-item';
import Link from 'next/link';
import React from 'react';

export function Menubar() {
  const menuItems = [
    {
      href: '/about',
      label: 'My',
    },
    {
      href: '/cars',
      label: 'Auta',
    },
    {
      href: '/you',
      label: 'Vy',
    },
  ];

  return (
    <div className='mb-5 flex w-full items-center justify-between gap-5 text-xl font-bold uppercase text-primary'>
      <Link href='/'>Sen za volantem</Link>
      <div className='flex items-center gap-5'>
        {menuItems.map((item) => (
          <MenuItem key={item.label} {...item} />
        ))}
        <LinkButton href='/reservations/form' label='Chci jet' />
      </div>
    </div>
  );
}
