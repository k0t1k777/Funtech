import './Event.css';
import About from './About/About';
import Speakers from './Speakers/Speakers';
import Plan from './Plan/Plan';
import Registration from './Registration/Registration';
import Place from './Place/Place';
import Courses from './Courses/Courses';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import * as Api from '../../utils/utils';

export interface IEventProps {
  handleRegOnIventOpen: () => void;
  handleCreateEventOpen: () => void;
}

export default function Event({
  handleRegOnIventOpen,
  handleCreateEventOpen,
}: IEventProps) {
  const [eventData, setEventData] = useState();
  const { eventId } = useParams();

  useEffect(() => {
    Api.getEvent(eventId).then((data) => {
      setEventData(data);
    });
  }, [eventId]);

  return (
    <div className='event'>
      <div className='event__container'>
        <About event={eventData} />
        <Speakers event={eventData} />
        <Plan event={eventData} />
      </div>
      <div className='event__container'>
        <Registration
          event={eventData}
          handleRegOnIventOpen={handleRegOnIventOpen}
          handleCreateEventOpen={handleCreateEventOpen}
        />
        <Place event={eventData} />
      </div>
      <Courses />
    </div>
  );
}
