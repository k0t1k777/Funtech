import './EventsPoster.css';
import PosterCard from '../PosterCard/PosterCard';
import { getDate } from '../../../helpers/Date';
import { MAIN_DATA } from './../../../utils/constants';

export interface EventsPosterProps {
  eventsBlock: Events[];
  setEventId: (eventId: []) => void;
  text: string;
}
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
export default function EventsPoster({
  text,
  eventsBlock,
  setEventId,
}: EventsPosterProps) {
  return (
    <div className='events-poster'>
      <h2 className='events-poster__title'>{text}</h2>
      <div
        className={`events-poster-cards ${
          text === MAIN_DATA.personalTitle ? 'events-poster-cards_personal' : ''
        }`}
      >
        {eventsBlock.map(
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
    </div>
  );
}
