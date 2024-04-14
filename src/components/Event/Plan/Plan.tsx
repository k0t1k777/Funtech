import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { PLAN_DATA } from './../../../utils/constants';
import { getStartTime } from '../../../helpers/Date';
import IEvent from '../../types/Event';
import './Plan.css';

export interface IPlanProps {
  event: IEvent;
}

export default function Plan({ event }: IPlanProps) {
  return (
    <div className='plan'>
      <h2 className='plan__title'>{PLAN_DATA.text}</h2>
      <div className='plan__containers'>
        {event?.event_parts.map((part, index) => (
          <div key={index} className='plan__container'>
            <p className='plan__time'>
              {getStartTime(part.event_part_start_time)}
            </p>
            <p className='plan__description'>
              <b className='plan__bold-text'>{`${part.event_part_name}: `}</b>
              {part.event_part_description}
            </p>
            <SpeakerCard
              isPlanBlock={true}
              speakerName={part.speaker.speaker_name}
              speakerCompany={part.speaker.company}
              speakerPosition={part.speaker.position}
              speakerPhoto={part.speaker.photo}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
