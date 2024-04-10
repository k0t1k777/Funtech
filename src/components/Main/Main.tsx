import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';

export interface MainProps {
  events: Events[];
}

export interface Events {
  events: Events[];
}

export default function Main({ events }: MainProps) {

  return (
    <div className='main'>
      <div>
        <News />
        <EventsPoster events={events}/>
      </div>
      <FiltersContainer />
    </div>
  );
}
