import { useState } from 'react';
import PopupRegistration from '../Popups/PopupRegistration';
import './Header.css';
import PopupEnter from '../Popups/PopupEnter';

export const Header = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isEnterOpen, setIsEnterOpen] = useState(false);

  const handeleEnterOpen = () => {
    setIsEnterOpen(true);
  };

  const handeleRegistrationOpen = () => {
    setIsRegistrationOpen(true);
  };

  const handleOverlayClose = () => {
    setIsRegistrationOpen(false);
    setIsEnterOpen(false)
  };

  return (
    <>
      <div>
        <button onClick={handeleRegistrationOpen}>Авторизация</button>
        <button onClick={handeleEnterOpen}>Войти</button>
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
    </>
  );
};
