import './Footer.css';
import Logo from './../../assets/Logo.svg?react';
import { FOOTER_DATA } from './../../utils/constants'

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <Logo />
        <p className='footer__text'>{FOOTER_DATA.text}</p>
      </div>
    </>
  );
}
