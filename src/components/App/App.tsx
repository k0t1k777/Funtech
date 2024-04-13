import { Header } from '../Header/Header';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Event from '../Event/Event';
import { useEffect, useState } from 'react';
import * as Api from './../../utils/utils';
import { Events } from './../Main/PosterCardList/PosterCardList';
import { EventCard } from './../Event/Plan/Plan';

export default function App() {
  const [events, setEvents] = useState<Events[]>([]);
  const [eventId, setEventId] = useState<EventCard[]>([]);
  // const [personalEvents, getPersonalEvents] = useState<EventCard[]>([]);
  // console.log('personalEvents: ', personalEvents);

  useEffect(() => {
    Api.getEvents()
      .then((data) => {
        setEvents(data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  // useEffect(() => {
  //   Api.getPersonalEvents()
  //     .then((data) => {
  //       getPersonalEvents(data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route
          path='/'
          element={<Main events={events} setEventId={setEventId} />}
        />
        <Route path='/event/:id' element={<Event eventId={eventId} />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
