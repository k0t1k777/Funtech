import './PosterCardList.css';
import PosterCard from '../PosterCard/PosterCard';
import { MONTH_NAMES_DATA } from './../../../utils/constants';

export interface Events {
  id: string;
  name: string;
  skill: string;
  start_time: string;
  end_time: string | null;
  format: string;
  status: string;
  is_registrated: boolean;
  is_deleted: boolean;
  first_speaker: {
    position?: string | undefined;
    speaker_name: string | undefined;
    company: string;
    speaker_description: string;
  };
  event_type: {
    event_type_name: string;
  };
  specializations: {
    specialization_name: string;
  };
}

export interface PosterCardListProps {
  events: Events[];
  setEventId: (eventId: []) => void;
}

export default function PosterCardList({
  events,
  setEventId,
}: PosterCardListProps) {

  function getDate(startTime: string, endTime: string | null) {
    const startDate = new Date(startTime);
    if (endTime) {
      const endDate = new Date(endTime);
      if (startDate.getMonth() === endDate.getMonth()) {
        return `${startDate.getDate()} - ${endDate.getDate()} ${
          MONTH_NAMES_DATA[startDate.getMonth()]
        }`;
      }
      return `${startDate.getDate()} ${
        MONTH_NAMES_DATA[startDate.getMonth()]
      } - ${endDate.getDate()} ${MONTH_NAMES_DATA[endDate.getMonth()]}`;
    }
    return `${startDate.getDate()} ${MONTH_NAMES_DATA[startDate.getMonth()]}`;
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
              date={getDate(card.start_time, card.end_time)}
              isRegistrated={card.is_registrated}
              isDeleted={card.is_deleted}
              setEventId={setEventId}
            />
          )
      )}
    </div>
  );
}
