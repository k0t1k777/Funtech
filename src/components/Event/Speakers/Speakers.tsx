import './Speakers.css';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { SPEAKERS_DATA } from './../../../utils/constants';
import { EventCard } from './../Plan/Plan';

export interface SpeakersProps {
  eventId: EventCard;
}

export default function Speakers({ eventId }: SpeakersProps) {
  const getRandomIndex = (min: number, max: number) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const randomIndexes: number[] = [];
  while (randomIndexes.length < 2) {
    const randomIndex = getRandomIndex(0, eventId.event_parts.length - 1);
    if (!randomIndexes.includes(randomIndex)) {
      randomIndexes.push(randomIndex);
    }
  }
  return (
    <div className='speakers'>
      <h2 className='speakers__title'>{SPEAKERS_DATA.text}</h2>
      <div className='speakers__container'>
        {randomIndexes.map((index) => (
          <div key={index}>
            <SpeakerCard
              isPlanBlock={false}
              speakerName={eventId.event_parts[index].speaker.speaker_name}
              speakerCompany={eventId.event_parts[index].speaker.company}
              speakerPosition={eventId.event_parts[index].speaker.position}
              speakerPhoto={eventId.event_parts[index].speaker.photo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
