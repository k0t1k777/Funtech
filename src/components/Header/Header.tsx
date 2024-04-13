import { useState } from 'react';
import PopupRegistration from '../Popups/PopupRegistration';
import './Header.css';
import PopupEnter from '../Popups/PopupEnter';
import PopupProfile from '../Popups/PopupProfile';
import PopupCreateEvent from '../Popups/PopupCreateEvent';
import PopupEntry from '../Popups/PopupEntry';
import PopupNotification from '../Popups/PopupNotification';
import PopupPersonal from '../Popups/PopupPersonal/PopupPersonal';
import PopupRegOnEvent from '../Popups/PopupRegOnEvent/PopupRegOnEvent';

export const Header = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isEnterOpen, setIsEnterOpen] = useState(false);
  const [isEnterProfile, setIsEnterProfile] = useState(false);
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);
  const [isEntryOpen, setIsEntryOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const [isRegOnIventOpen, setIsRegOnIventOpen] = useState(false);

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
    setIsCreateEventOpen(false);
    setIsEntryOpen(false);
    setIsNotificationOpen(false);
    setIsPersonalOpen(false);
    setIsRegOnIventOpen(false);
  };

  const handleCreateEventOpen = () => {
    setIsCreateEventOpen(true);
  };

  const handleEntryOpen = () => {
    setIsEntryOpen(true);
  };

  const handleNotificationOpen = () => {
    setIsNotificationOpen(true);
  };

  const handlePersonalOpen = () => {
    setIsPersonalOpen(true);
  };

  const handleRegOnIventOpen = () => {
    setIsRegOnIventOpen(true);
  };

  return (
    <>
      <div>
        <button onClick={handeleRegistrationOpen}>Авторизация</button>
        <button onClick={handeleEnterOpen}>Войти</button>
        <button onClick={handeleProfileOpen}>Профиль</button>
        <button onClick={handleCreateEventOpen}>Создать событие</button>
        <button onClick={handleEntryOpen}>Запись</button>
        <button onClick={handleNotificationOpen}>Уведомления</button>
        <button onClick={handlePersonalOpen}>Личные данные</button>
        <button onClick={handleRegOnIventOpen}>Регистрация на событие</button>
      </div>
      {isRegistrationOpen && (
        <PopupRegistration handleOverlayClose={handleOverlayClose} />
      )}
      {isEnterOpen && <PopupEnter handleOverlayClose={handleOverlayClose} />}
      {isEnterProfile && (
        <PopupProfile handleOverlayClose={handleOverlayClose} />
      )}
      {isCreateEventOpen && (
        <PopupCreateEvent handleOverlayClose={handleOverlayClose} />
      )}
      {isEntryOpen && <PopupEntry handleOverlayClose={handleOverlayClose} />}
      {isNotificationOpen && (
        <PopupNotification handleOverlayClose={handleOverlayClose} />
      )}
      {isPersonalOpen && (
        <PopupPersonal handleOverlayClose={handleOverlayClose} />
      )}
      {isRegOnIventOpen && (
        <PopupRegOnEvent handleOverlayClose={handleOverlayClose} />
      )}
    </>
  );
};
