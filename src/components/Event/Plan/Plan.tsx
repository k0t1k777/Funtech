import { useEffect, useState } from 'react';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { PLAN_DATA } from './../../../utils/constants';
import './Plan.css';

export interface PlanProps {
  eventId: EventCard;
}

export interface EventCard {
  name: string;
  description: string;
  eventId: EventCard[];
  format?: string;
  place: string;
  start_time?: string;
  status?: string;
  city: string;
  event_parts: {
    event_part_name?: string;
    event_part_description?: string;
    event_part_start_time?: string;
    position?: string;
    company?: string;
    speaker: {
      speaker_name: string;
      company: string;
      position: string;
      photo: string;
    };
  }[];
}
export default function Plan({ eventId }: PlanProps) {
  console.log('eventId: ', eventId);
  const [date, setDate] = useState<string>('');
  function getCurrentDateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }
  if (date === '' && eventId?.event_parts?.event_part_start_time) {
    const firstDateTime = getCurrentDateTime();
    setDate(firstDateTime);
  }

  useEffect(() => {
    if (date === '' && eventId) {
      const firstDateTime = getCurrentDateTime();
      setDate(firstDateTime);
    }
  }, [date, eventId]);

  return (
    <div className='plan'>
      <h2 className='plan__title'>{PLAN_DATA.text}</h2>
      <div className='plan__containers'>
        {eventId.event_parts.map((part, index) => (
          <div key={index} className='plan__container'>
            <p className='plan__time'>{date}</p>
            <p className='plan__description'>
              <b className='plan__bold-text'>{part.event_part_name}</b>
              {part.event_part_description}
            </p>
            <SpeakerCard 
              isPlanBlock={true}
              speakerName={part.speaker.speaker_name}
              speakerCompany={part.speaker.company}
              speakerPosition={part.speaker.position}
              speakerPhoto={part.speaker.photo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
