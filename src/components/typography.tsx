import React, { ReactNode } from 'react';

interface Header {
  children: ReactNode;
}

export const H1 = ({ children }: Header) => (
  <h1 className='mb-4 text-2xl font-semibold text-primary'>{children}</h1>
);

export const H2 = ({ children }: Header) => (
  <h2 className='mb-4 text-xl font-semibold text-primary'>{children}</h2>
);
