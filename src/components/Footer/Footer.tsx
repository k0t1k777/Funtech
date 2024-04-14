import './Footer.css';
import Logo from './../../assets/Logo.svg?react';

export default function Footer() {
  return (
    <>
      <div className='footer'>
        <Logo />
        <p className='footer__text'>© 2005–2024 ООО «Яндекс»</p>
      </div>
    </>
  );
}
