import './EventsPoster.css';
import PosterCard from 'src/components/Main/PosterCard/PosterCard';
import { getDate } from 'src/helpers/Date';
import { MAIN_DATA } from 'src/utils/constants';

interface IEventsPosterProps {
  events: any;
  text: string;
  handleRegOnIventOpen: () => void;
  handleCreateEventOpen: () => void;
}

export default function EventsPoster({
  text,
  events,
  handleRegOnIventOpen,
  handleCreateEventOpen,
}: IEventsPosterProps) {

  return (
    <div className='events-poster'>
      <h2 className='events-poster__title'>{text}</h2>
      <div
        className={`events-poster-cards ${
          text === MAIN_DATA.personalTitle ? 'events-poster-cards_personal' : ''
        }`}
      >
        {events && events.length > 0 ? (
          events.map(
            (card: any) =>
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
                  isRegistrated={card.is_registrated}
                  isDeleted={card.is_deleted}
                  image={card.image}
                  date={getDate(card.start_time, card.end_time)}
                  handleRegOnIventOpen={handleRegOnIventOpen}
                  handleCreateEventOpen={handleCreateEventOpen}
                />
              )
          )
        ) : (
          <p>Ничего не найдено</p>
        )}
      </div>
    </div>
  );
}
