import './Speakers.css';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { SPEAKERS_DATA } from './../../../utils/constants';
import { EventCard } from './../Plan/Plan';

export interface SpeakersProps {
  eventId: EventCard;
}

export default function Speakers({ eventId }: SpeakersProps) {
  return (
    <div className='speakers'>
      <h2 className='speakers__title'>{SPEAKERS_DATA.text}</h2>
      <div className='speakers__container'>
        {eventId.event_parts.slice(0, 2).map((event) => {
          return (
            <div key={event.id}>
              <SpeakerCard
                isPlanBlock={false}
                speakerName={event.speaker.speaker_name}
                speakerCompany={event.speaker.company}
                speakerPosition={event.speaker.position}
                speakerPhoto={event.speaker.photo}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
