import React from 'react';

import TelegramLogo from '../../assests/telegram.svg'
import InstagramLogo from '../../assests/instagram.svg'
import X from '../../assests/x.svg'

import './index.css'; // Import your CSS file for styling

const ContactUs = () => {
  return (
      <>
        <p className='logo-bottom'>Logo</p>
        <div className='contact-details-container'>
            <p className='link'>Contact@00000000.tech</p>
            <button className='social-media-btn'>
              <img className='social-media-logos' src={TelegramLogo} alt="Telegram logo" />
            </button>
            <button className='social-media-btn'>
              <img className='social-media-logos' src={InstagramLogo} alt="Instagram logo" />
            </button>
            <button className='social-media-btn'>
              <img className='social-media-logos' src={X} alt="X logo" />
            </button>
        </div>
      </>
  );
};

export default ContactUs;
