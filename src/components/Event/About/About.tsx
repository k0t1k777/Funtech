import './About.css';
import { EventCard } from './../Plan/Plan';

export interface AboutProps {
  eventId: EventCard;
}

export default function About({ eventId }: AboutProps) {
  return (
    <div className='about'>
      <h2 className='about__title'>{eventId.name}</h2>
      <p className='about__subtitle'>{eventId.description}</p>
    </div>
  );
}
