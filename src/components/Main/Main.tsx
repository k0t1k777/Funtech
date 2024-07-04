import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';
import { MAIN_DATA } from './../../utils/constants';
import { useEffect, useState } from 'react';

interface IMainProps {
  events: Event[];
  personalEvents: PersonalEvent[];
  cities: any;
  handleRegOnIventOpen: () => void;
  handleCreateEventOpen: () => void;
  loggedIn: boolean;
}

interface Event {
  place: string;
}

interface PersonalEvent {
  place: string;
}

export default function Main({
  events,
  cities,
  loggedIn,
  personalEvents,
  handleRegOnIventOpen,
  handleCreateEventOpen,
}: IMainProps) {
  const [cityValue, setCityValue] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [filteredPersEvents, setPersFilteredEvents] = useState(personalEvents);

  useEffect(() => {
    if (cityValue) {
      const filtred = events.filter((event) => event.place === cityValue);
      setFilteredEvents(filtred);
    } else {
      setFilteredEvents(events);
    }
  }, [cityValue, events]);

  useEffect(() => {
    if (cityValue) {
      const filtred = personalEvents.filter(
        (event) => event.place === cityValue
      );
      setPersFilteredEvents(filtred);
    } else {
      setPersFilteredEvents(personalEvents);
    }
  }, [cityValue, personalEvents]);

  return (
    <div className='main'>
      <div>
        <News />
        {loggedIn && (
          <EventsPoster
            events={filteredPersEvents}
            text={MAIN_DATA.personalTitle}
            handleRegOnIventOpen={handleRegOnIventOpen}
            handleCreateEventOpen={handleCreateEventOpen}
          />
        )}
        <EventsPoster
          events={filteredEvents}
          text={MAIN_DATA.title}
          handleRegOnIventOpen={handleRegOnIventOpen}
          handleCreateEventOpen={handleCreateEventOpen}
        />
      </div>
      <FiltersContainer
        loggedIn={loggedIn}
        cityValue={cityValue}
        setCityValue={setCityValue}
        cities={cities}
      />
    </div>
  );
}
