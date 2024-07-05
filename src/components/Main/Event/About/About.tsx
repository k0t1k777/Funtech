import 'src/components/Main/Event/About/About.css';

export interface IAboutProps {
  event: any;
}

export default function About({ event }: IAboutProps) {

  return (
    <div className='about'>
      <h2 className='about__title'>{event?.name}</h2>
      <p className='about__subtitle'>{event?.description}</p>
    </div>
  );
}
