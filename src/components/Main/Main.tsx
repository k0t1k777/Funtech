import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';
import { Events } from './../Main/EventsPoster/EventsPoster';
import { MAIN_DATA } from './../../utils/constants';

export interface MainProps {
  events: Events[];
  personalEvents: PersonalEvents[];
  setEventId: (eventId: []) => void;
}

export interface EventId {
  setEventId: (eventId: []) => void;
}

export interface PersonalEvents {
  personalEvents: EventPersonalCard[];
}

export default function Main({
  events,
  cities,
  personalEvents,
  setEventId,
}: MainProps) {
  return (
    <div className='main'>
      <div>
        <News />
        <EventsPoster
          eventsBlock={personalEvents}
          text={MAIN_DATA.personalTitle}
          setEventId={setEventId}
        />
        <EventsPoster
          eventsBlock={events}
          setEventId={setEventId}
          text={MAIN_DATA.title}
        />
      </div>
      <FiltersContainer 
      // cities={cities}
      />
    </div>
  );
}
