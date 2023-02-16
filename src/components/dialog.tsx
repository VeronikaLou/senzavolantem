import React, { PropsWithChildren } from 'react';

export function Modal({ children, id }: PropsWithChildren<{ id: string }>) {
  return (
    <div
      id={id}
      aria-hidden='true'
      className='h-modal fixed top-0 left-0 right-0 z-50 hidden w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0 md:h-full'
    >
      <div className='relative h-full w-full max-w-2xl md:h-auto'>
        <div className='relative rounded-lg bg-white shadow dark:bg-gray-700'>{children}</div>
      </div>
    </div>
  );
}
