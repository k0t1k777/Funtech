import 'src/components/Header/Header.css';
import Logo from 'src/assets/Logo.svg?react';
import Search from 'src/assets/Search.svg?react';
import Profile from 'src/assets/Profile.svg?react';
import { POPUP_DATA } from 'src/utils/constants';
import { Link } from 'react-router-dom';

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
      <Link to='/'>
        <Logo />
      </Link>

      <div className='header__container-wrapper'>
        <div className='header__container-search'>
          <Search />
        </div>
        <button className='header__container-profile'>
          <div className='header__container-profile-img'>
            {
              <Profile
                onClick={!loggedIn ? handleEnterOpen : handleProfileOpen}
              />
            }
          </div>
          <p className='header__text'>
            {!loggedIn ? POPUP_DATA.enter : `${firstName} ${shirtSecondName}`}
          </p>
        </button>
      </div>
    </div>
  );
}
