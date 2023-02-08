import { Footer } from './footer';
import { Menubar } from './menubar';
import React from 'react';

interface LayoutProps {
  children: any;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className='relative h-full min-h-screen w-full flex-col'>
      <div className='h-full pt-5 pl-10 pr-10 pb-20'>
        <Menubar />
        {children}
      </div>
      <Footer />
    </div>
  );
}
