import { Header } from '../Header/Header';
import Main from '../Main/Main';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Event from '../Event/Event';

export default function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/event' element={<Event />} />
      </Routes>
      {/* <Footer /> */}
    </>
  );
}
