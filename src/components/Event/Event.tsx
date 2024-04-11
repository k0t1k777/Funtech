import './Event.css';
import About from './About/About';
import Speakers from './Speakers/Speakers';
import Plan from './Plan/Plan';
import Registration from './Registration/Registration';
import Place from './Place/Place';
import Courses from './Courses/Courses';

export interface EventProps {
  eventId: EventCard[];
}

export interface EventCard {
    eventId: EventCard[];
    format?: string;
    place?: string;
    start_time?: string;
    status?: string;
    city: [
      {
        city_name?: string;
      }
    ];
    event_type: [
      {
        event_type_name: string;
      }
    ];
  }

export default function Event({ eventId }: EventProps) {
  return (
    <div className='event'>
      <div className='event__container'>
        <About eventId={eventId} />
        <Speakers eventId={eventId}/>
        <Plan eventId={eventId}/>
      </div>
      <div className='event__container'>
        <Registration eventId={eventId}/>
        <Place eventId={eventId}/>
      </div>
      <Courses />
    </div>
  );
}
