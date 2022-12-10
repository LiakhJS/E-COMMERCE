import React from 'react';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { TfiFacebook } from 'react-icons/tfi';
import './footer.css';

export const Footer = () => {
  return (
    <div className='footer__wrapper'>
      <footer>
        <div className='footer__inf'>
          <div className='footer__title'>
            Dudeshape
          </div>
          <div className='footer__description'>
            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
          </div>
        </div>
        <div className='footer__navigation'>
          <div className='footer__nav-main'>
            Menu
          </div>
          <div className='footer__nav'>All</div>
          <div className='footer__nav'>Offers</div>
          <div className='footer__nav'>About</div>
          <div className='footer__nav'>Search</div>
        </div>
        <div className='footer__navigation'>
          <div className='footer__nav-main'>
            Contact Us
          </div>
          <div className='footer__nav'>
            +8801628069404/Watsup</div>
          <div className='footer__nav'>nastyaliakhjs@gmail.com</div>
        </div>
      </footer>
      <div className='footer__icons'>
        <TfiFacebook className='footer__icon'/>
        <BsInstagram className='footer__icon'/>
        <BsTwitter className='footer__icon'/>
      </div>
    </div>
  )
}
