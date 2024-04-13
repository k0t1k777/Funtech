import './EventsPoster.css';
import PosterCardList from '../PosterCardList/PosterCardList';
import { Events } from './../PosterCardList/PosterCardList';

export interface EventsPosterProps {
  events: Events[];
  setEventId: (eventId: []) => void;
  text: string;
}
export default function EventsPoster({
  text,
  events,
  setEventId,
}: EventsPosterProps) {
  return (
    <div className='events-poster'>
      <h2 className='events-poster__title'>{text}</h2>
      <PosterCardList events={events} setEventId={setEventId} />
    </div>
  );
}
