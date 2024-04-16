import './Header.css';
import Logo from './../../assets/Logo.svg?react';
import Search from './../../assets/Search.svg?react';
import Profile from './../../assets/Profile.svg?react';
import { POPUP_DATA } from '../../utils/constants';

export interface HeaderProps {
  handleEnterOpen?: () => void;
  handleProfileOpen?: () => void;
  loggedIn: boolean;
}

export default function Header({
  handleEnterOpen,
  handleProfileOpen,
  loggedIn,
}: HeaderProps) {
  const firstName = localStorage.getItem('firstName');
  const secondName = localStorage.getItem('secondName');
  const shirtSecondName = secondName
    ? secondName.charAt(0).toUpperCase() + '.'
    : '';
  return (
    <div className='header'>
      <Logo />
      <div className='header__container-wrapper'>
        <div className='header__container-search'>
          <Search />
        </div>
        <button className='header__container-profile'>
          <div className='header__container-profile-img'>
            {<Profile onClick={!loggedIn ? handleEnterOpen : handleProfileOpen} />}
          </div>
          <p className='header__text'>
            {!loggedIn ? POPUP_DATA.enter : `${firstName} ${shirtSecondName}`}
          </p>
        </button>
      </div>
    </div>
  );
}
