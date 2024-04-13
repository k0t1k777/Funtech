import './Event.css';
import About from './About/About';
import Speakers from './Speakers/Speakers';
import Plan, { EventCard } from './Plan/Plan';
import Registration from './Registration/Registration';
import Place from './Place/Place';
import Courses from './Courses/Courses';
import { useEffect, useState } from 'react';

export interface EventProps {
  eventId: EventCard;
}

export default function Event({ eventId }: EventProps) {
  const [showEventId, setShowEventId] = useState(eventId);
  console.log('showEventIdsdsdsdsd: ', showEventId);

  useEffect(() => {
    setShowEventId(eventId);
  }, [eventId]);

  return (
    <div className='event'>
      <div className='event__container'>
        <About eventId={showEventId} />
        <Speakers />
        <Plan eventId={showEventId} />
      </div>
      <div className='event__container'>
        <Registration eventId={showEventId} />
        <Place eventId={showEventId} />
      </div>
      <Courses />
    </div>
  );
}
