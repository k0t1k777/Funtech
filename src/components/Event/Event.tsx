import './Event.css';
import About from './About/About';
import Speakers from './Speakers/Speakers';
import Plan from './Plan/Plan';
import Registration from './Registration/Registration';
import Place from './Place/Place';
import Courses from './Courses/Courses';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IEvent from '../types/Event';

export interface IEventProps {
  events: any;
  handleRegOnIventOpen: () => void;
  handleCreateEventOpen: () => void;
}

export default function Event({
  events,
  handleRegOnIventOpen,
  handleCreateEventOpen,
}: IEventProps) {
  const [eventData, setEventData] = useState<IEvent | undefined>(undefined);
  const { eventId } = useParams<{ eventId: string }>();

  // useEffect(() => {
  //   Api.getEvent(eventId).then((data) => {
  //     setEventData(data);
  //   });
  // }, [eventId]);

  useEffect(() => {
    if (eventId) {
      const selectedEvent = events.find(
        (event: any) => event.id === parseInt(eventId)
      );
      setEventData(selectedEvent);
    }
  }, [eventId, events]);

  return (
    <div className='event'>
      <div className='event__container'>
        <About event={eventData} />
        <Speakers
         event={events}
        />
        <Plan
         event={eventData}
        />
      </div>
      <div className='event__container'>
        <Registration
          event={eventData}
          handleRegOnIventOpen={handleRegOnIventOpen}
          handleCreateEventOpen={handleCreateEventOpen}
        />
        <Place
        event={eventData}
        />
      </div>
      <Courses />
    </div>
  );
}
