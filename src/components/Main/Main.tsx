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
  format: string;
}

interface PersonalEvent {
  place: string;
  format: string;
}

export default function Main({
  events,
  cities,
  loggedIn,
  personalEvents,
  handleRegOnIventOpen,
  handleCreateEventOpen,
}: IMainProps) {
  // Фильтрация
  const [cityValue, setCityValue] = useState('');
  const [filteredEvents, setFilteredEvents] = useState(events);
  const [filteredPersEvents, setPersFilteredEvents] = useState(personalEvents);
  const [formatEvent, setFormatEvent] = useState<string[]>([])
  console.log('formatEvent: ', formatEvent);

  useEffect(() => {
    if (cityValue) {
      const filtredByCity = events.filter((event) => event.place === cityValue);
      setFilteredEvents(filtredByCity);
    }
    if (formatEvent.length > 0) {
      const filtredByFormat = events.filter((event) => formatEvent.includes(event.format));
      setFilteredEvents(filtredByFormat);
  } 
    else {
      setFilteredEvents(events);
    }
  }, [cityValue, formatEvent, events]);

  useEffect(() => {
    if (cityValue) {
      const filtredByCity = personalEvents.filter(
        (event) => event.place === cityValue
      );
      setPersFilteredEvents(filtredByCity);
    } 
    if (formatEvent.length > 0) {
      const filtredByFormat = personalEvents.filter((event) => formatEvent.includes(event.format));
      setPersFilteredEvents(filtredByFormat);
  } else {
      setPersFilteredEvents(personalEvents);
    }
  }, [cityValue, formatEvent, personalEvents]);

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
        cityValue={cityValue}
        setCityValue={setCityValue}
        cities={cities}
        formatEvent={formatEvent}
        setFormatEvent={setFormatEvent}
      />
    </div>
  );
}
