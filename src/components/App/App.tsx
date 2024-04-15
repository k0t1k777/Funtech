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
  const [valuesFormat, setValuesFormat] = useState<string>('');
  const [valuesFirstName, setValuesFirstName] = useState<string>('');
  const [valuesLastName, setValuesLastName] = useState<string>('');
  const [valuesEmail, setValuesEmail] = useState<string>('');
  const [valuesPhone, setValuesPhone] = useState<number | undefined>();
  const [valuesTelegram, setValuesTelegram] = useState<string>('');
  const [valuesBirthDate, setValuesBirthDate] = useState<string>('');
  const [valuesCity, setValuesCity] = useState<string>('');
  const [valuesActivity, setValuesActivity] = useState<string>('');
  const [valuesCompany, setValuesCompany] = useState<string>('');
  const [valuesPosition, setValuesPosition] = useState<string>('');
  const [valuesExpYears, setValuesExpYears] = useState<number | undefined>();
  const [valuesSpec, setValuesSpec] = useState<string>('');

  function handleRegister({
    firstName,
    secondName,
    email,
    phone,
  }: {
    firstName: string;
    secondName: string;
    email: string;
    phone: string;
  }) {
    Api.registration({ firstName, secondName, email, phone })
      .then((data) => {
        if (data) {
          console.log('data: ', data);
          handleLogin({ firstName, secondName, email, phone });
        }
      })
      .catch((error) => {
        console.log('error: ', error);
      });
  }
  function handleLogin() {
    console.log('handleLogin: ', handleLogin);
  }

  // function handleLogin({ email, password }) {
  //   MainApi.login({ email, password })
  //     .then((data) => {
  //       if (data.token) {
  //         storeLoggedIn(true);
  //         setLoggedIn(true);
  //         storeToken(data.token);
  //         setAuthMessage({
  //           text: `Вы успешно вошли!`,
  //           isSuccess: true,
  //         });
  //         navigate("/movies");
  //       }
  //     })
  //     .catch((error) => {
  //       setAuthMessage({
  //         text: `Ошибка входа: ${error}`,
  //         isSuccess: false,
  //       });
  //     });
  // }

  // const [loggedIn, setLoggedIn] = React.useState(false);

  // function getStoredLoggedIn() {
  //   const storedisLoggedIn = localStorage.getItem("isLoggedIn");
  //   return storedisLoggedIn;
  // }

  // function storeLoggedIn(value) {
  //   localStorage.setItem("isLoggedIn", value);
  // }
  // function storeToken(value) {
  //   localStorage.setItem("jwt", value);
  // }

  // useEffect(() => {
  //   const token = getStoredToken();
  //   if (!token) {
  //     return;
  //   }
  //   storeLoggedIn(true);
  //   setLoggedIn(true);
  // }, []);

  // при смене состояния loggedIn проверяем, если оно false - ничего не делаем
  // а если оно true, то обновляем ниформацию о currentUser
  // Регистрация

  // useEffect(() => {
  //   Api.getEvents()
  //     .then((data) => {
  //       setEvents(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  // Профиль
  // function handleChangeProfile(name, email) {
  //   const token = getStoredToken();
  //   if (!token) {
  //     setProfileMessage({
  //       text: `Ошибка авторизации. Пожалуйста, авторизуйтесь заново.`,
  //       isSuccess: false,
  //     });
  //     return;
  //   }
  //   MainApi.changeProfile({ name, email, token })
  //     .then((data) => {
  //       const updatedUser = {
  //         name: data.name,
  //         email: data.email,
  //       };
  //       setCurrentUser(updatedUser);
  //       setProfileMessage({
  //         text: `Вы обновили информацию о себе.`,
  //         isSuccess: true,
  //       });
  //     })
  //     .catch((error) => {
  //       setProfileMessage({
  //         text: `Ошибка при обновлении профиля: ${error}`,
  //         isSuccess: false,
  //       });
  //     });
  // }

  const postEvent = () => {
    Api.postEvent(registrationEvent);
    console.log('registrationEvent: ', registrationEvent);
  };

  useEffect(() => {
    setRegistrationEvent({
      event: parseInt(eventId, 10),
      format: valuesFormat,
      first_name: valuesFirstName,
      last_name: valuesLastName,
      email: valuesEmail,
      phone: valuesPhone,
      telegram: valuesTelegram,
      birth_date: valuesBirthDate,
      city: valuesCity,
      activity: valuesActivity,
      company: valuesCompany,
      position: valuesPosition,
      experience_years: valuesExpYears,
      specializations: valuesSpec,
    });
  }, [
    eventId,
    valuesFormat,
    valuesFirstName,
    valuesLastName,
    valuesEmail,
    valuesPhone,
    valuesTelegram,
    valuesBirthDate,
    valuesCity,
    valuesActivity,
    valuesCompany,
    valuesPosition,
    valuesExpYears,
    valuesSpec,
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

  const handleRegistrationOpen = () => {
    setIsRegistrationOpen(true);
  };

  const handleProfileOpen = () => {
    setIsProfileOpen(true);
  };

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

  const handleCreateEventOpen = () => {
    handleOverlayClose();
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
      <Header handleRegistrationOpen={handleRegistrationOpen} />
      <Routes>
        <Route
          path='/'
          element={
            <Main
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
      {isRegistrationOpen && (
        <PopupRegistration
          handleOverlayClose={handleOverlayClose}
          handleRegister={handleRegister}
        />
      )}
      {isEnterOpen && <PopupEnter handleOverlayClose={handleOverlayClose} />}
      {isProfileOpen && (
        <PopupProfile
          handleOverlayClose={handleOverlayClose}
          handleCreateEventOpen={handleCreateEventOpen}
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
      {isRegOnIventOpen && (
        <PopupRegOnEvent
          setIsRegOnIventOpen={setIsRegOnIventOpen}
          handleOverlayClose={handleOverlayClose}
          postEvent={postEvent}
          valuesFormat={valuesFormat}
          valuesFirstName={valuesFirstName}
          valuesLastName={valuesLastName}
          valuesEmail={valuesEmail}
          valuesPhone={valuesPhone}
          valuesTelegram={valuesTelegram}
          valuesBirthDate={valuesBirthDate}
          valuesCity={valuesCity}
          valuesActivity={valuesActivity}
          valuesCompany={valuesCompany}
          valuesPosition={valuesPosition}
          valuesExpYears={valuesExpYears}
          valuesSpec={valuesSpec}
          specializations={specializations}
          setValuesFormat={setValuesFormat}
          setValuesFirstName={setValuesFirstName}
          setValuesLastName={setValuesLastName}
          setValuesEmail={setValuesEmail}
          setValuesPhone={setValuesPhone}
          setValuesTelegram={setValuesTelegram}
          setValuesBirthDate={setValuesBirthDate}
          setValuesCity={setValuesCity}
          setValuesActivity={setValuesActivity}
          setValuesCompany={setValuesCompany}
          setValuesPosition={setValuesPosition}
          setValuesExpYears={setValuesExpYears}
          setValuesSpec={setValuesSpec}
        />
      )}
    </>
  );
}
