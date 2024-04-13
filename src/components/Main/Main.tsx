import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';
import { Events } from './../Main/PosterCardList/PosterCardList';
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
  personalEvents,
  setEventId,
}: MainProps) {
  return (
    <div className='main'>
      <div>
        <News />
        <EventsPoster
          events={events}
          personalEvents={personalEvents}
          text={MAIN_DATA.personalTitle}
        />
        <EventsPoster
          events={events}
          setEventId={setEventId}
          text={MAIN_DATA.title}
        />
      </div>
      <FiltersContainer />
    </div>
  );
}
