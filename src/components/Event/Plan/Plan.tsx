import SpeakerCard from '../SpeakerCard/SpeakerCard';
import './Plan.css';

// export interface PlanProps {
//   eventId: EventCard[];
// }

// export interface EventCardProps {
//   // name: string;
//   // description: string;
// }
export default function Plan(
  // { eventId }: PlanProps
) {
  return (
    <div className='plan'>
      <h2 className='plan__title'>Программа</h2>
      <div className='plan__containers'>
        <div className='plan__container'>
          <p className='plan__time'>18:00</p>
          <p className='plan__description'>
            <b className='plan__bold-text'>Подведение итогов:</b> Разберём самые
            яркие достижения в мире ML и AI за прошедший год! Кто выиграет титул
            «Чемпиона алгоритмов»?
          </p>
          <SpeakerCard isPlanBlock={true} />
        </div>
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
