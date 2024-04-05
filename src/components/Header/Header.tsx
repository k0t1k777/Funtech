import { useState } from 'react';
import PopupRegistration from '../Popups/PopupRegistration';
import './Header.css';
import PopupEnter from '../Popups/PopupEnter';
import PopupProfile from '../Popups/PopupProfile';

export const Header = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isEnterOpen, setIsEnterOpen] = useState(false);
  const [isEnterProfile, setIsEnterProfile] = useState(false);

  const handeleEnterOpen = () => {
    setIsEnterOpen(true);
  };

  const handeleRegistrationOpen = () => {
    setIsRegistrationOpen(true);
  };

  const handeleProfileOpen = () => {
    setIsEnterProfile(true);
  };

  const handleOverlayClose = () => {
    setIsRegistrationOpen(false);
    setIsEnterOpen(false);
    setIsEnterProfile(false);
  };

  return (
    <>
      <div>
        <button onClick={handeleRegistrationOpen}>Авторизация</button>
        <button onClick={handeleEnterOpen}>Войти</button>
        <button onClick={handeleProfileOpen}>Профиль</button>
      </div>
      {isRegistrationOpen && (
        <PopupRegistration
          handeleRegistrationOpen={handeleRegistrationOpen}
          handleOverlayClose={handleOverlayClose}
        />
      )}
      {isEnterOpen && (
        <PopupEnter
          handeleEnterOpen={handeleEnterOpen}
          handleOverlayClose={handleOverlayClose}
        />
      )}
      {isEnterProfile && (
        <PopupProfile
          handeleProfileOpen={handeleProfileOpen}
          handleOverlayClose={handleOverlayClose}
        />
      )}
    </>
  );
};
