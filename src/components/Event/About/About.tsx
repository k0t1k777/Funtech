import './About.css';

export interface AboutProps {
  eventId: EventCard[];
}

export interface EventCard {
  name?: string;
  description?: string;
}

export default function About({ eventId }: AboutProps) {
  return (
    <div className='about'>
      <h2 className='about__title'>{eventId?.name}</h2>
      <p className='about__subtitle'>{eventId?.description}</p>
    </div>
  );
}
