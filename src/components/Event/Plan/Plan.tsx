import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { PLAN_DATA } from './../../../utils/constants';
import { getStartTime } from '../../../helpers/Date';
import './Plan.css';

export interface IPlanProps {
  event?: any;
}

export default function Plan({ event }: IPlanProps) {
  let renderCount = 0;

  return (
    <div className='plan'>
      <h2 className='plan__title'>{PLAN_DATA.text}</h2>
      <div className='plan__containers'>
{event?.event_parts.map((part: any) => {
          renderCount++;
          if (renderCount % 3 === 0) {
            return (
              <div key={part?.id} className='plan__container'>
                <p className='plan__time'>
                  {getStartTime(part?.event_part_start_time)}
                </p>
                <p className='plan__description'>
                  <b className='plan__bold-text'>{part?.event_part_name}: </b>
                  {part?.event_part_description}
                </p>
              </div>
            );
          } else {
            return (
              <div key={part?.id} className='plan__container'>
                <p className='plan__time'>
                  {getStartTime(part?.event_part_start_time)}
                </p>
                <p className='plan__description'>
                  <b className='plan__bold-text'>{part?.event_part_name}: </b>
                  {part?.event_part_description}
                </p>
                <SpeakerCard
                  speakerName={event?.first_speaker.speaker_name}
                  speakerCompany={event?.first_speaker.company}
                  speakerPosition={event?.first_speaker.position}
                  speakerPhoto={event?.first_speaker.photo}
                />
              </div>
            );
          }
        })}
      </div>
    </div>
  );
}
