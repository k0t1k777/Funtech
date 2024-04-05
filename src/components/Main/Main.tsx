import './Main.css';
import News from './News/News';
import Event from './Event/Event';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function Main() {
  return (
    <div className='main'>
      <Router>
        <Routes>
          <Route
            path={'/'}
            element={
              <>
                <div>
                  <News />
                  <EventsPoster />
                </div>
                <FiltersContainer />
              </>
            }
          />
          <Route path={'/event'} element={<Event />} />
        </Routes>
      </Router>
    </div>
  );
}
