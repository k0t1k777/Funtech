import './EventsPoster.css';
import PosterCardList from '../PosterCardList/PosterCardList';
import { Events } from './../../Main/Main'
import { EVENTS_POSTER_DATA } from './../../../utils/constants'

export interface EventsPosterProps {
  events: Events[];
}

export default function EventsPoster({ events }: EventsPosterProps) {
  return (
    <div className='events-poster'>
      <h2 className='events-poster__title'>{EVENTS_POSTER_DATA.title}</h2>
      <PosterCardList events={events}/>
    </div>
  );
}
