import { useState } from 'react';
import PopupRegistration from '../Popups/PopupRegistration';
import './Header.css';
import PopupEnter from '../Popups/PopupEnter';
import PopupProfile from '../Popups/PopupProfile';
import PopupCreateEvent from '../Popups/PopupCreateEvent';
import PopupEntry from '../Popups/PopupEntry';
import PopupNotification from '../Popups/PopupNotification';
import PopupAboutMe from '../Popups/PopupAboutMe';
import PopupPersonal from '../Popups/PopupPersonal/PopupPersonal';

export const Header = () => {
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isEnterOpen, setIsEnterOpen] = useState(false);
  const [isEnterProfile, setIsEnterProfile] = useState(false);
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);
  const [isEntryOpen, setIsEntryOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);

  const handeleEnterOpen = () => {
    setIsEnterOpen(true);
  };

  const handeleRegistrationOpen = () => {
    setIsRegistrationOpen(true);
  };

  const handeleProfileOpen = () => {
    setIsEnterProfile(true);
  };

  const handeleAboutMeOpen = () => {
    setIsEnterAboutMe(true);
  };

  const handleOverlayClose = () => {
    setIsRegistrationOpen(false);
    setIsEnterOpen(false);
    setIsEnterProfile(false);
    setIsCreateEventOpen(false);
    setIsEntryOpen(false);
    setIsNotificationOpen(false);
    setIsPersonalOpen(false);
  };

  const handleCreateEventOpen = () => {
    setIsCreateEventOpen(true);
  };

  const handleEntryOpen = () => {
    setIsEntryOpen(true);
  };

  const handleNotificationOpen = () => {
    setIsNotificationOpen(true);

    setIsEnterAboutMe(false);
  };

  const handlePersonalOpen = () => {
    setIsPersonalOpen(true);
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
        <button onClick={handeleAboutMeOpen}>О мне</button>
        <button onClick={handlePersonalOpen}>Личные данные</button>
      </div>
      {isRegistrationOpen && (
        <PopupRegistration handleOverlayClose={handleOverlayClose} />
      )}
      {isEnterOpen && <PopupEnter handleOverlayClose={handleOverlayClose} />}
      {isEnterProfile && (
        <PopupProfile
          handeleProfileOpen={handeleProfileOpen}
          handleOverlayClose={handleOverlayClose}
        />
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
    </>
  );
};
