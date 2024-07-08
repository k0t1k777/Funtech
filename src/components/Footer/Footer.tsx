import 'src/components/Footer/Footer.css';
import Logo from 'src/assets/Logo.svg?react';
import { FOOTER_DATA } from 'src/utils/constants';

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
