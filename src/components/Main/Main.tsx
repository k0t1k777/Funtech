import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';
import { Events } from './../Main/PosterCardList/PosterCardList';


export interface MainProps {
  events: Events[];
  getEventId: (event: Event) => void;
}

export interface EventId {
  getEventId: (event: Event) => void;
}

export default function Main({ events, getEventId }: MainProps) {
  return (
    <div className='main'>
      <div>
        <News />
        <EventsPoster events={events} getEventId={getEventId} />
      </div>
      <FiltersContainer />
    </div>
  );
}