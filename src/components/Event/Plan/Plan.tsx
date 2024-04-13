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
  image: string;
  eventId: EventCard[];
  format?: string;
  place: string;
  start_time?: string;
  status?: string;
  city: {
    city_name?: string | undefined;
  };
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
  const [date, setDate] = useState<string>('');

  function getCurrentDateTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    return `${hours}:${minutes}`;
  }

  useEffect(() => {
    const firstDateTime = getCurrentDateTime();
    setDate(firstDateTime);
  }, []);

  useEffect(() => {
    localStorage.setItem('eventId', JSON.stringify(eventId));
  }, [eventId]);

  return (
    <div className='plan'>
      <h2 className='plan__title'>{PLAN_DATA.text}</h2>
      <div className='plan__containers'>
        {Array.isArray(eventId.event_parts) &&
          eventId.event_parts.map((part, index) => (
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
