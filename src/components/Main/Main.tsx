import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';

interface MainProps {
  events: any;
}

export default function Main({ events }: MainProps) {
  console.log('events: ', events);


  return (
    <div className='main'>
      <div>
        <News />
        <EventsPoster />
      </div>
      <FiltersContainer />
    </div>
  );
}
