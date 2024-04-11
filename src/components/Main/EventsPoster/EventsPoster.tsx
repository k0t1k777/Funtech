import './EventsPoster.css';
import PosterCardList from '../PosterCardList/PosterCardList';
import { Events } from './../PosterCardList/PosterCardList';
import { EVENTS_POSTER_DATA } from './../../../utils/constants';

export interface EventsPosterProps {
  events: Events[];
  getEventId: (event: Event) => void;
}

export default function EventsPoster({
  events,
  getEventId,
}: EventsPosterProps) {
  return (
    <div className='events-poster'>
      <h2 className='events-poster__title'>{EVENTS_POSTER_DATA.title}</h2>
      <PosterCardList events={events} getEventId={getEventId} />
    </div>
  );
}
