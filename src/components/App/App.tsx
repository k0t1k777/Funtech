import Header from '../Header/Header';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Event from '../Event/Event';
import { useEffect, useState } from 'react';
import * as Api from './../../utils/utils';
import IEventCard from '../types/EventCard';
import PopupEnter from '../Popups/PopupEnter';
import PopupProfile from '../Popups/PopupProfile';
import PopupCreateEvent from '../Popups/PopupCreateEvent/PopupCreateEvent';
import PopupEntry from '../Popups/PopupEntry';
import PopupNotification from '../Popups/PopupNotification';
import PopupPersonal from '../Popups/PopupPersonal/PopupPersonal';
import PopupRegOnEvent from '../Popups/PopupRegOnEvent/PopupRegOnEvent';
import PopupRegistration from '../Popups/PopupRegistration';
import Footer from '../Footer/Footer';
import { SelectProps } from '../Select/Select';
import { Spec } from '../Popups/PopupRegOnEvent/PopupRegOnEvent';

export default function App() {
  const eventId = localStorage.getItem('eventId');
  const [cities, setCities] = useState<SelectProps[]>([]);
  const [events, setEvents] = useState<IEventCard[]>([]);
  const [specializations, setSpecializations] = useState<Spec[]>([]);
  const [personalEvents, setPersonalEvents] = useState<IEventCard[]>([]);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isEnterOpen, setIsEnterOpen] = useState(false);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);
  const [isEntryOpen, setIsEntryOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const [isRegOnIventOpen, setIsRegOnIventOpen] = useState(false);
  // POST
  const [registrationEvent, setRegistrationEvent] = useState<object>({});
  const [valuesFirstName, setValuesFirstName] = useState<string>('');
  const [valuesLastName, setValuesLastName] = useState<string>('');
  const [valuesEmail, setValuesEmail] = useState<string>('');
  const [valuesPhone, setValuesPhone] = useState<number | null>();
  const [valuesTelegram, setValuesTelegram] = useState<string>('');
  const [valuesBirthDate, setValuesBirthDate] = useState<string>('');
  const [valuesCity, setValuesCity] = useState<string>('');
  const [valuesCompany, setValuesCompany] = useState<string>('');
  const [valuesPosition, setValuesPosition] = useState<string>('');
  const [valuesExpYears, setValuesExpYears] = useState<number | null>();
  const [loggedIn, setLoggedIn] = useState<boolean>(() => {
    return localStorage.getItem('loggedIn') === 'true';
  });

  function handleLogin() {
    setLoggedIn(true);
    localStorage.setItem('loggedIn', 'true');
  }

  const postEvent = () => {
    Api.postEvent(registrationEvent);
    console.log('registrationEvent: ', registrationEvent);
  };

  useEffect(() => {
    setRegistrationEvent({
      event: parseInt(eventId, 10),
      first_name: valuesFirstName,
      last_name: valuesLastName,
      email: valuesEmail,
      phone: valuesPhone,
      telegram: valuesTelegram,
      birth_date: valuesBirthDate,
      city: valuesCity,
      company: valuesCompany,
      position: valuesPosition,
      experience_years: valuesExpYears,
    });
  }, [
    eventId,
    valuesFirstName,
    valuesLastName,
    valuesEmail,
    valuesPhone,
    valuesTelegram,
    valuesBirthDate,
    valuesCity,
    valuesCompany,
    valuesPosition,
    valuesExpYears,
  ]);

  useEffect(() => {
    Api.getEvents()
      .then((data) => {
        setEvents(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getSpecializations()
      .then((data) => {
        setSpecializations(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getPersonalEvents()
      .then((data) => {
        setPersonalEvents(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    Api.getCities()
      .then((data) => {
        setCities(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  const handleOverlayClose = () => {
    setIsRegistrationOpen(false);
    setIsEnterOpen(false);
    setIsProfileOpen(false);
    setIsCreateEventOpen(false);
    setIsEntryOpen(false);
    setIsNotificationOpen(false);
    setIsPersonalOpen(false);
    setIsRegOnIventOpen(false);
  };
  // Авторизация
  const handleEnterOpen = () => {
    setIsEnterOpen(true);
  };
  // регистрация
  const handleRegistrationOpen = () => {
    setIsRegistrationOpen(true);
  };
  // Профиль
  const handleProfileOpen = () => {
    setIsProfileOpen(true);
  };

  const handleCreateEventOpen = () => {
    setIsCreateEventOpen(true);
  };

  const handleEntryOpen = () => {
    setIsEntryOpen(true);
  };
  // Уведомления
  const handleNotificationOpen = () => {
    setIsNotificationOpen(true);
  };
  // Персональный попап
  const handlePersonalOpen = () => {
    setIsPersonalOpen(true);
  };

  const handleRegOnIventOpen = () => {
    setIsRegOnIventOpen(true);
  };

  return (
    <>
      <Header
        handleEnterOpen={handleEnterOpen}
        handleProfileOpen={handleProfileOpen}
        loggedIn={loggedIn}
      />
      <Routes>
        <Route
          path='/'
          element={
            <Main
              loggedIn={loggedIn}
              events={events}
              personalEvents={personalEvents}
              cities={cities}
              // cityValue={cityValue}
              // setCityValue={setCityValue}
              handleRegOnIventOpen={handleRegOnIventOpen}
              handleCreateEventOpen={handleCreateEventOpen}
            />
          }
        />
        <Route
          path='/event/:eventId'
          element={
            <Event
              handleRegOnIventOpen={handleRegOnIventOpen}
              handleCreateEventOpen={handleCreateEventOpen}
            />
          }
        />
      </Routes>
      <Footer />
      {!loggedIn && isEnterOpen && (
        <PopupEnter
          handleOverlayClose={handleOverlayClose}
          handleRegistrationOpen={handleRegistrationOpen}
        />
      )}
      {!loggedIn && isRegistrationOpen && (
        <PopupRegistration
          handleOverlayClose={handleOverlayClose}
          handleLogin={handleLogin}
        />
      )}
      {loggedIn && isProfileOpen && (
        <PopupProfile
          handleOverlayClose={handleOverlayClose}
          handleCreateEventOpen={handleCreateEventOpen}
          handlePersonalOpen={handlePersonalOpen}
          handleNotificationOpen={handleNotificationOpen}
          setIsProfileOpen={setIsProfileOpen}
        />
      )}
      {isCreateEventOpen && (
        <PopupCreateEvent
          handleOverlayClose={handleOverlayClose}
          setIsCreateEventOpen={setIsCreateEventOpen}
        />
      )}
      {isEntryOpen && (
        <PopupEntry
          handleOverlayClose={handleOverlayClose}
          setIsEntryOpen={setIsEntryOpen}
        />
      )}
      {isNotificationOpen && (
        <PopupNotification
          handleOverlayClose={handleOverlayClose}
          setIsNotificationOpen={setIsNotificationOpen}
          setIsProfileOpen={setIsProfileOpen}
        />
      )}
      {isPersonalOpen && (
        <PopupPersonal
          handleOverlayClose={handleOverlayClose}
          setIsPersonalOpen={setIsPersonalOpen}
          setIsProfileOpen={setIsProfileOpen}
        />
      )}
      {isRegOnIventOpen && (
        <PopupRegOnEvent
          handleEntryOpen={handleEntryOpen}
          setIsRegOnIventOpen={setIsRegOnIventOpen}
          handleOverlayClose={handleOverlayClose}
          postEvent={postEvent}
          valuesFirstName={valuesFirstName}
          valuesLastName={valuesLastName}
          valuesEmail={valuesEmail}
          valuesPhone={valuesPhone}
          valuesTelegram={valuesTelegram}
          valuesBirthDate={valuesBirthDate}
          valuesCity={valuesCity}
          valuesCompany={valuesCompany}
          valuesPosition={valuesPosition}
          valuesExpYears={valuesExpYears}
          specializations={specializations}
          setValuesFirstName={setValuesFirstName}
          setValuesLastName={setValuesLastName}
          setValuesEmail={setValuesEmail}
          setValuesPhone={setValuesPhone}
          setValuesTelegram={setValuesTelegram}
          setValuesBirthDate={setValuesBirthDate}
          setValuesCity={setValuesCity}
          setValuesCompany={setValuesCompany}
          setValuesPosition={setValuesPosition}
          setValuesExpYears={setValuesExpYears}
        />
      )}
    </>
  );
}
