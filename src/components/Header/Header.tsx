import './Header.css';
import Logo from './../../assets/Logo.svg?react';
import Search from './../../assets/Search.svg?react';
import Profile from './../../assets/Profile.svg?react';

export interface HeaderProps {
  handeleRegistrationOpen?: () => void;
}

export default function Header({ handeleRegistrationOpen }: HeaderProps) {
  return (
    <div className='header'>
      <Logo />
      <div className='header__container-wrapper'>
        <div className='header__container-search'>
          <Search />
        </div>
        <button className='header__container-profile'>
          <div className='header__container-profile-img'>
            {<Profile onClick={handeleRegistrationOpen} />}
          </div>
          <p className='header__text'>Войти</p>
        </button>
      </div>
    </div>
  );
}
