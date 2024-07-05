import 'src/components/Main/Event/Event.css';
import About from 'src/components/Main/Event/About/About';
import Speakers from 'src/components/Main/Event/Speakers/Speakers';
import Plan from 'src/components/Main/Event/Plan/Plan';
import Registration from 'src/components/Main/Event/Registration/Registration';
import Place from 'src/components/Main/Event/Place/Place';
import Courses from 'src/components/Main/Event/Courses/Courses';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import IEvent from 'src/types/Event';

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
