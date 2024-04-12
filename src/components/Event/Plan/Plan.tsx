import { useState } from 'react';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { PLAN_DATA } from './../../../utils/constants';
import './Plan.css';
// import { EventCard } from '../Event';

export interface PlanProps {
  eventId: EventCard[];
}

export interface EventCard {
  event_parts: {
    event_part_name?: string | undefined;
    event_part_description?: string | undefined;
    event_part_start_time?: string;
  } [];
}
export default function Plan({ eventId }: PlanProps) {
  const eventIdArray = [eventId];
  console.log('eventId: ', eventId);
  const [date, setdate] = useState<string>('');
  function getCurrentDateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  if (date === '' && eventId.event_parts[0]?.event_part_start_time) {
    const firstDateTime = getCurrentDateTime();
    setdate(firstDateTime);
  }
  return (
    <div className='plan'>
      <h2 className='plan__title'>{PLAN_DATA.text}</h2>
        {eventIdArray.map((item, index) => (
         <div key={index}  className='plan__containers'>
          <div className='plan__container'>
            <p className='plan__time'>{date}</p>
            <p className='plan__description'>
              <b className='plan__bold-text'>
                {item?.event_parts?.event_part_name}
              </b >
              {item?.event_parts?.event_part_description}
            </p>
            <SpeakerCard  isPlanBlock={true} />
          </div>
          </div>
        ))}
    </div>
  );
}
