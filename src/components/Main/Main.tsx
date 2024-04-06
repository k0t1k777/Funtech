import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';

export default function Main() {
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
