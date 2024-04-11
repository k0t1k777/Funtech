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
  is_registrated: boolean;
  first_speaker: [
    {
      position?: string | undefined;
      speaker_name?: string | undefined;
      company: string;
      speaker_description: string;
    }
  ];
  specializations: [
    {
      specialization_name: string;
    }
  ];
  event_type: [
    {
      event_type_name: string;
    }
  ];
}

export interface PosterCardListProps {
  events: Events[];
  getEventId: (eventId: []) => void;
}

export default function PosterCardList({
  events,
  getEventId,
}: PosterCardListProps) {
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
        (card) => (
          // card.first_speaker && (
          <PosterCard
            key={card.id}
            id={card.id}
            name={card.name}
            description={card.first_speaker?.position}
            organization={card.first_speaker?.speaker_name}
            company={card.first_speaker?.company}
            skill={card.specializations?.specialization_name}
            event={card.event_type?.event_type_name}
            format={card.format}
            // статус Я иду на событие
            status={card.status}
            // - is_registrated (показывает авторизованному пользователю, идет ли он на это мероприятие, для кнопки "Я иду")
            buton={card.is_registrated}
            date={date}
            getEventId={getEventId}
          />
        )
        // )
      )}
    </div>
  );
}
