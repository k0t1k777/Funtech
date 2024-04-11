import './PosterCardList.css';
import PosterCard from '../PosterCard/PosterCard';
import { useState } from 'react';
import { MONTH_NAMES_DATA } from './../../../utils/constants';

export interface Events {
  id: string;
  name: string;
  skill: string;
  start_time: string;
  format: string;
  status: string;
  first_speaker: [
    {
      position?: string | undefined;
      speaker_name: string | undefined;
      company: string;
      speaker_description: string;
    }
  ];
  event_type: [
    {
      specialization_name: string;
    }
  ]
}

export interface PosterCardListProps {
  events: Events[];
}

export default function PosterCardList({ events }: PosterCardListProps) {
  console.log('events: ', events);
  const [date, setdate] = useState<string>('');

  function getCurrentDateTime() {
    const now = new Date();
    const month = MONTH_NAMES_DATA[now.getMonth()];
    const day = now.getDate().toString().padStart(2, '0');
    return `${day} ${month}`;
  }
  if (date === '' && events[0]?.start_time) {
    const firstDateTime = getCurrentDateTime();
    setdate(firstDateTime);
  }
  return (
    <div className='poster-cards'>
      {events.map(
        (card) =>
          card.first_speaker && (
            <PosterCard
              key={card.id}
              id={card.id}
              name={card.name}
              description={card.first_speaker.position}
              organization={card.first_speaker.speaker_name}
              company={card.first_speaker.company}
              skill={card.specializations.specialization_name}
              event={card.event_type.event_type_name}
              format={card.format}
              status={card.status}


              date={date}
            />
          )
      )}
    </div>
  );
}

