import './Header.css';
import Logo from './../../assets/Logo.svg?react';
import Search from './../../assets/Search.svg?react';
import Profile from './../../assets/Profile.svg?react';
import { POPUP_DATA } from '../../utils/constants';

export interface HeaderProps {
  handleEnterOpen?: () => void;
}

export default function Header({
  handleEnterOpen,
}: HeaderProps) {
  return (
    <div className='header'>
      <Logo />
      <div className='header__container-wrapper'>
        <div className='header__container-search'>
          <Search />
        </div>
        <button className='header__container-profile'>
          <div className='header__container-profile-img'>
            {<Profile onClick={handleEnterOpen} />}
          </div>
          <p className='header__text'>{POPUP_DATA.enter}</p>
        </button>
      </div>
    </div>
  );
}
