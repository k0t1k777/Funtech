import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';
import { Events } from './../Main/PosterCardList/PosterCardList';
import { MAIN_DATA } from './../../utils/constants';

export interface MainProps {
  events: Events[];
  getEventId: (eventId: []) => void;
}

export interface EventId {
  getEventId: (eventId: []) => void;
}

export default function Main({ events, getEventId }: MainProps) {
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
          getEventId={getEventId}
          text={MAIN_DATA.title}
        />
      </div>
      <FiltersContainer />
    </div>
  );
}
