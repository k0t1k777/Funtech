import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';
import { Events } from './../Main/PosterCardList/PosterCardList';
import { MAIN_DATA } from './../../utils/constants';

export interface MainProps {
  events: Events[];
  setEventId: (eventId: []) => void;
}

export interface EventId {
  setEventId: (eventId: []) => void;
}

export default function Main({ events, setEventId }: MainProps) {
  return (
    <div className='main'>
      <div>
        <News />
        {/* <EventsPoster
          events={events}
          getEventId={getEventId}
          text={MAIN_DATA.personalTitle}
        /> */}
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
