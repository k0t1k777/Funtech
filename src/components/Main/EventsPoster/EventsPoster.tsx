import './EventsPoster.css';
import PosterCard from '../PosterCard/PosterCard';
import { getDate } from '../../../helpers/Date';
import { MAIN_DATA } from './../../../utils/constants';
import IEventCard from '../../types/EventCard';

interface IEventsPosterProps {
  events: IEventCard[];
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
  
  console.log('events: ', events);

  return (
    <div className='events-poster'>
      <h2 className='events-poster__title'>{text}</h2>
      <div
        className={`events-poster-cards ${
          text === MAIN_DATA.personalTitle ? 'events-poster-cards_personal' : ''
        }`}
      >
        {events?.map((card) =>
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
        )}
      </div>
    </div>
  );
}


{/* <PosterCard 
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
/> */}