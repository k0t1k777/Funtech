import './About.css';
import { EventCard } from './../../Event/Event'


export interface AboutProps {
  eventId: EventCard[];
}

export interface EventCardProps {
  name: string;
  description: string;
}

export default function About({ eventId }: AboutProps) {
  console.log('eventId: ', eventId);  
  return (
    <div className='about'>
      <h2 className='about__title'>{eventId.name}</h2>
      <p className='about__subtitle'>{eventId.description}</p>
    </div>
  );
}
