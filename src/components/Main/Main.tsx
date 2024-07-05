import 'src/components/Main/Main.css';
import News from 'src/components/Main/News/News';
import FiltersContainer from 'src/components/Main/FiltersContainer/FiltersContainer';
import EventsPoster from 'src/components/Main/EventsPoster/EventsPoster';
import { MAIN_DATA } from 'src/utils/constants';
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
  specializations: {
    specialization_name: string;
  };
  event_type: {
    event_type_name: string;
  };
}

interface PersonalEvent {
  place: string;
  format: string;
  specializations: {
    specialization_name: string;
  };
  event_type: {
    event_type_name: string;
  };
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
  const [formatFilter, setFormatFilter] = useState<string[]>([]);
  const [skillsFilter, setSkilsFilter] = useState<string[]>([]);
  const [typeFilter, setTypeFilter] = useState<string[]>([]);

  useEffect(() => {
    let filteredEvents = events;
    if (cityValue) {
      filteredEvents = filteredEvents.filter(
        (event) => event.place === cityValue
      );
    }
    if (formatFilter.length > 0) {
      filteredEvents = filteredEvents.filter((event) =>
        formatFilter.includes(event.format)
      );
    }
    if (skillsFilter.length > 0) {
      filteredEvents = filteredEvents.filter((event) =>
        skillsFilter.includes(event.specializations.specialization_name)
      );
    }
    if (typeFilter.length > 0) {
      filteredEvents = filteredEvents.filter((event) =>
        typeFilter.includes(event.event_type.event_type_name)
      );
    }
    setFilteredEvents(filteredEvents);
  }, [cityValue, formatFilter, skillsFilter, typeFilter, events]);

  useEffect(() => {
    let filteredPersEvents = personalEvents;
    if (cityValue) {
      filteredPersEvents = filteredPersEvents.filter(
        (event) => event.place === cityValue
      );
    }
    if (formatFilter.length > 0) {
      filteredPersEvents = filteredPersEvents.filter((event) =>
        formatFilter.includes(event.format)
      );
    }
    if (skillsFilter.length > 0) {
      filteredPersEvents = filteredPersEvents.filter((event) =>
        skillsFilter.includes(event.specializations.specialization_name)
      );
    }
    if (typeFilter.length > 0) {
      filteredPersEvents = filteredPersEvents.filter((event) =>
        typeFilter.includes(event.event_type.event_type_name)
      );
    }
    setPersFilteredEvents(filteredPersEvents);
  }, [cityValue, formatFilter, skillsFilter, typeFilter, personalEvents]);

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
        formatFilter={formatFilter}
        setFormatFilter={setFormatFilter}
        skillsFilter={skillsFilter}
        setSkilsFilter={setSkilsFilter}
        typeFilter={typeFilter}
        setTypeFilter={setTypeFilter}
      />
    </div>
  );
}
