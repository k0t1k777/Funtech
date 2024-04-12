import './EventsPoster.css';
import PosterCardList from '../PosterCardList/PosterCardList';
import { Events } from './../PosterCardList/PosterCardList';

export interface EventsPosterProps {
  events: Events[];
  getEventId: (eventId: []) => void;
  text: string;
}
export default function EventsPoster({
  text,
  events,
  getEventId,
}: EventsPosterProps) {
  return (
    <div className='events-poster'>
      <h2 className='events-poster__title'>{text}</h2>
      <PosterCardList events={events} getEventId={getEventId} />
    </div>
  );
}
