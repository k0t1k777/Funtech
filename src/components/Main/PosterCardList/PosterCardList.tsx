import './PosterCardList.css';
import PosterCard from '../PosterCard/PosterCard';
import { useState } from 'react';
import { MONTH_NAMES_DATA } from './../../../utils/constants';

export interface Events {
  id: string;
  first_speaker: [
    {
      speaker_name?: string;
      company?: string;
      speaker_description?: string;
    }
  ];
  start_time?: string;
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
              name={card.first_speaker.speaker_name}
              organization={card.first_speaker.company}
              description={card.first_speaker.speaker_description}
              date={date}
            />
          )
      )}
    </div>
  );
}
