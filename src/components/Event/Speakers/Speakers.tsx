import './Speakers.css';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { SPEAKERS_DATA } from './../../../utils/constants';
// import { EventCard } from './../../Event/Event'


// export interface SpeakersProps {
//   eventId: EventCard[];
// }

// export interface EventCardProps {
//   // eventId: EventCard[];

//   // name: string;
//   // description: string;
// }

export default function Speakers(
  // { eventId }: SpeakersProps
) {
  return (
    <div className='speakers'>
      <h2 className='speakers__title'>{SPEAKERS_DATA.text}</h2>
      <div className='speakers__container'>
        <SpeakerCard isPlanBlock={false} />
        <SpeakerCard isPlanBlock={false} />
      </div>
    </div>
  );
}
