import { IconButton } from './buttons';
import { faFacebookSquare, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import React from 'react';

export function Footer() {
  return (
    <footer className='absolute bottom-0 flex h-20 w-full items-center justify-center gap-5 bg-primary'>
      <IconButton
        icon={faInstagram}
        onClick={() => window.open('https://instagram.com/vali_the_van', '_blank')}
      />
      <IconButton
        icon={faYoutube}
        onClick={() =>
          window.open('https://www.youtube.com/channel/UCH-lW3TjWnnCB97czygdiTQ', '_blank')
        }
      />
      <IconButton
        icon={faFacebookSquare}
        onClick={() => window.open('https://facebook.com', '_blank')}
      />
    </footer>
  );
}
