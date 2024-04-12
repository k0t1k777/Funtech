import SpeakerCard from '../SpeakerCard/SpeakerCard';
import { PLAN_DATA } from './../../../utils/constants';
import './Plan.css';

export interface PlanProps {
  eventId: EventCard[];
}

export interface EventCard {
  event_parts: {
    event_part_name?: string;
    event_part_description?: string;
  }[];
  // name: string;
  // description: string;
}
export default function Plan({ eventId }: PlanProps) {
  const eventIdArray = [eventId];
  console.log('eventIdArray: ', eventIdArray);
  return (
    <div className='plan'>
      <h2 className='plan__title'>{PLAN_DATA.text}</h2>
      <div className='plan__containers'>
        {eventIdArray.map((item, index) => (
          <div key={index} className='plan__container'>
            <p className='plan__time'>18:00</p>
            <p className='plan__description'>
              <b className='plan__bold-text'>
                {item.event_parts.event_part_name}
              </b>
              {/* {item.event_parts.event_part_description} */}
            </p>
            <SpeakerCard isPlanBlock={true} />
          </div>
        ))}
        <div className='plan__container'>
          <p className='plan__time'>19:00</p>
          <p className='plan__description'>
            <b className='plan__bold-text'>Конкурсы:</b> Отвлекитесь от кода и
            покажите свои навыки в увлекательных конкурсах, где побеждает тот,
            кто может выйти за пределы скучных алгоритмов и воплотить идеи в
            жизнь!
          </p>
          <SpeakerCard isPlanBlock={true} />
        </div>
        <div className='plan__container'>
          <p className='plan__time'>20:00</p>
          <p className='plan__description'>
            <b className='plan__bold-text'>Танцы:</b> Взломайте танцпол своими
            движениями! Давайте проверим, насколько хорошо вы можете
            оптимизировать свои танцевальные алгоритмы!
          </p>
          <SpeakerCard isPlanBlock={true} />
        </div>
      </div>
    </div>
  );
}
