import Header from '../Header/Header';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Event from '../Event/Event';
import { useEffect, useState } from 'react';
import * as Api from './../../utils/utils';
import { Events } from './../Main/EventsPoster/EventsPoster';
import { EventCard } from './../Event/Plan/Plan';
import { PersonalEvents } from './../Main/Main';
import PopupEnter from '../Popups/PopupEnter';
import PopupProfile from '../Popups/PopupProfile';
import PopupCreateEvent from '../Popups/PopupCreateEvent';
import PopupEntry from '../Popups/PopupEntry';
import PopupNotification from '../Popups/PopupNotification';
import PopupPersonal from '../Popups/PopupPersonal/PopupPersonal';
import PopupRegOnEvent from '../Popups/PopupRegOnEvent/PopupRegOnEvent';
import PopupRegistration from '../Popups/PopupRegistration';
import Footer from '../Footer/Footer';

export default function App() {
  const [events, setEvents] = useState<Events[]>([]);
  const [eventId, setEventId] = useState<EventCard[]>([]);
  const [cities, setCities] = useState([]);
  console.log('cities: ', cities);
  const [personalEvents, setPersonalEvents] = useState<PersonalEvents[]>([]);
  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isEnterOpen, setIsEnterOpen] = useState(false);
  const [isEnterProfile, setIsEnterProfile] = useState(false);
  const [isCreateEventOpen, setIsCreateEventOpen] = useState(false);
  const [isEntryOpen, setIsEntryOpen] = useState(false);
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);
  const [isPersonalOpen, setIsPersonalOpen] = useState(false);
  const [isRegOnIventOpen, setIsRegOnIventOpen] = useState(false);

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
        console.log('data: ', data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

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
      <Header />
      <Routes>
        <Route
          path='/'
          element={
            <Main
              events={events}
              setEventId={setEventId}
              personalEvents={personalEvents}
            />
          }
        />
        <Route
          path='/event/:id'
          element={
            <Event
              eventId={eventId}
              handleRegOnIventOpen={handleRegOnIventOpen}
            />
          }
        />
      </Routes>
      <Footer />
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
}
