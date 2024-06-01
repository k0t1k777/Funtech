import './Speakers.css';
import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { SPEAKERS_DATA } from './../../../utils/constants';
import IEvent from '../../types/Event';

export interface ISpeakersProps {
  event?: any;
}

export default function Speakers({ event }: ISpeakersProps) {
  console.log('event: ', event);
  return (
    <div className='speakers'>
      <h2 className='speakers__title'>{SPEAKERS_DATA.text}</h2>
      <div className='speakers__container'>
        {event?.slice(0, 2).map((event) => {
          return (
            <div key={event.id}>
              <SpeakerCard
                // isPlanBlock={false}
                speakerName={event?.first_speaker.speaker_name}
                speakerCompany={event?.first_speaker.company}
                // speakerPosition={event?.speaker.position}
                // speakerPhoto={event?.speaker.photo}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
