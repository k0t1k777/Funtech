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

export default function App() {
  const [cities, setCities] = useState<SelectProps[]>([]);
  const [events, setEvents] = useState<IEventCard[]>([]);
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
  const [valuesEvent, setValuesEvent] = useState<string>('');
  const [valuesFormat, setValuesFormat] = useState<string>('');
  const [valuesSource, setValuesSource] = useState<string>('');
  const [valuesFirstName, setValuesFirstName] = useState<string>('');
  const [valuesLastName, setValuesLastName] = useState<string>('');
  const [valuesEmail, setValuesEmail] = useState<string>('');
  const [valuesPhone, setValuesPhone] = useState<string>('');
  const [valuesTelegram, setValuesTelegram] = useState<string>('');
  const [valuesBirthDate, setValuesBirthDate] = useState<string>('');
  const [valuesCity, setValuesCity] = useState<string>('');
  const [valuesActivity, setValuesActivity] = useState<string>('');
  const [valuesCompany, setValuesCompany] = useState<string>('');
  const [valuesPosition, setValuesPosition] = useState<string>('');
  const [valuesExpYears, setValuesExpYears] = useState<string>('');
  const [valuesSpec, setValuesSpec] = useState<string>('');

  const postEvent = () => {
    Api.postEvent(registrationEvent);
    console.log('registrationEvent: ', registrationEvent);
  };

  useEffect(() => {
    setRegistrationEvent({
      event: valuesEvent,
      format: valuesFormat,
      source: valuesSource,
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
    valuesEvent,
    valuesFormat,
    valuesSource,
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
      <Header handeleProfileOpen={handleProfileOpen} />
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
            />
          }
        />
        <Route
          path='/event/:eventId'
          element={<Event handleRegOnIventOpen={handleRegOnIventOpen} />}
        />
      </Routes>
      <Footer />
      {isRegistrationOpen && (
        <PopupRegistration handleOverlayClose={handleOverlayClose} />
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
          handleOverlayClose={handleOverlayClose}
          postEvent={postEvent}
          // valuesEvent={valuesEvent}
          // valuesFormat={valuesFormat}
          // valuesSource={valuesSource}
          valuesFirstName={valuesFirstName}
          valuesLastName={valuesLastName}
          valuesEmail={valuesEmail}
          valuesPhone={valuesPhone}
          valuesTelegram={valuesTelegram}
          valuesBirthDate={valuesBirthDate}
          valuesCity={valuesCity}
          // valuesActivity={valuesActivity}
          // valuesCompany={valuesCompany}
          // valuesPosition={valuesPosition}
          // valuesExpYears={valuesExpYears}
          // valuesSpec={valuesSpec}
          // setValuesEvent={setValuesEvent}
          // setValuesFormat={setValuesFormat}
          // setValuesSource={setValuesSource}
          setValuesFirstName={setValuesFirstName}
          setValuesLastName={setValuesLastName}
          setValuesEmail={setValuesEmail}
          setValuesPhone={setValuesPhone}
          setValuesTelegram={setValuesTelegram}
          setValuesBirthDate={setValuesBirthDate}
          setValuesCity={setValuesCity}
          // setValuesActivity={setValuesActivity}
          // setValuesCompany={setValuesCompany}
          // setValuesPosition={setValuesPosition}
          // setValuesExpYears={setValuesExpYears}
          // setValuesSpec={setValuesSpec}
        />
      )}
    </>
  );
}
