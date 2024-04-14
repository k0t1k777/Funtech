import './About.css';
import IEvent from '../../types/Event';

export interface IAboutProps {
  event: IEvent;
}

export default function About({ event }: IAboutProps) {
  return (
    <div className='about'>
      <h2 className='about__title'>{event?.name}</h2>
      <p className='about__subtitle'>{event?.description}</p>
    </div>
  );
}
