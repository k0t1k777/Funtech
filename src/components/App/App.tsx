import { Header } from '../Header/Header';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Event from '../Event/Event';
import { useEffect, useState } from 'react';
import * as Api from './../../utils/utils'

export default function App() {
  const [events, getEvents] = useState('');
  console.log('events: ', events);

  useEffect(() => {
    Api.getEvents()
      .then((data) => {
        getEvents(data.results);
        console.log('data: ', data.results);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main events={events}/>} />
        <Route path='/event' element={<Event />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
