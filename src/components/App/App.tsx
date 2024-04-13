import { Header } from '../Header/Header';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Event from '../Event/Event';
import { useEffect, useState } from 'react';
import * as Api from './../../utils/utils';
import { Events } from './../Main/EventsPoster/EventsPoster';
import { EventCard } from './../Event/Plan/Plan';
import { PersonalEvents } from './../Main/Main'

export default function App() {
  const [events, setEvents] = useState<Events[]>([]);
  const [eventId, setEventId] = useState<EventCard[]>([]);
  const [personalEvents, setPersonalEvents] = useState<PersonalEvents[]>([]);
  console.log('personalEvents: ', personalEvents);

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
        <Route path='/event/:id' element={<Event eventId={eventId} />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
