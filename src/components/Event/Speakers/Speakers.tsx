import './Speakers.css';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { EventCard } from './../../Event/Event'


export interface SpeakersProps {
  eventId: EventCard[];
}

export interface EventCardProps {
  // eventId: EventCard[];

  // name: string;
  // description: string;
}

export default function Speakers({ eventId }: SpeakersProps) {
  console.log('eventId: ', eventId);
  return (
    <div className='speakers'>
      <h2 className='speakers__title'>Спикер</h2>
      <div className='speakers__container'>
        <SpeakerCard isPlanBlock={false} />
        <SpeakerCard isPlanBlock={false} />
      </div>
    </div>
  );
}
