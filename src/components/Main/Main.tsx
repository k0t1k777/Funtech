import 'src/components/Main/Main.css';
import News from 'src/components/Main/News/News';
import FiltersContainer from 'src/components/Main/FiltersContainer/FiltersContainer';
import EventsPoster from 'src/components/Main/EventsPoster/EventsPoster';
import { MAIN_DATA } from 'src/utils/constants';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';

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
  start_time: string;
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
  start_time: string;
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
  const [date, setDate] = useState<[dayjs.Dayjs, dayjs.Dayjs]>([
    dayjs(),
    dayjs(),
  ]);
  const [showDateBefore, setShowDateBefore] = useState<string | null>(null);
  const [showDateAfter, setShowDateAfter] = useState<string | null>(null);

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
    if (showDateBefore && showDateAfter) {
      filteredEvents = filteredEvents.filter((event) => {
        const eventStartTime = dayjs(event.start_time).format('YYYY-MM-DD');
        return (
          eventStartTime >= showDateBefore && eventStartTime <= showDateAfter
        );
      });
    }
    setFilteredEvents(filteredEvents);
  }, [
    cityValue,
    formatFilter,
    skillsFilter,
    typeFilter,
    showDateBefore,
    showDateAfter,
    events,
  ]);

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
    if (showDateBefore && showDateAfter) {
      filteredPersEvents = filteredPersEvents.filter((event) => {
        const eventStartTime = dayjs(event.start_time).format('YYYY-MM-DD');
        return (
          eventStartTime >= showDateBefore && eventStartTime <= showDateAfter
        );
      });
    }
    setPersFilteredEvents(filteredPersEvents);
  }, [
    cityValue,
    formatFilter,
    skillsFilter,
    typeFilter,
    showDateBefore,
    showDateAfter,
    personalEvents,
  ]);

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
        date={date}
        setDate={setDate}
        setShowDateBefore={setShowDateBefore}
        setShowDateAfter={setShowDateAfter}
      />
    </div>
  );
}
