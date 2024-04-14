import './Header.css';
import Logo from './../../assets/Logo.svg?react';
import Search from './../../assets/Search.svg?react';
import Profile from './../../assets/Profile.svg?react';

export default function Header() {
  return (
    <div className='header'>
      <Logo />
      <div className='header__container-wrapper'>
        <div className='header__container-search'>
          <Search />
        </div>
        <button className='header__container-profile'>
          <div className='header__container-profile-img'>{<Profile />}</div>
          <p className='header__text'>Войти</p>
        </button>
      </div>
    </div>
  );
}
