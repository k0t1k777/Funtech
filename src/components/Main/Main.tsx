import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';
import IEventCard from '../types/EventCard';
import { MAIN_DATA } from './../../utils/constants';

interface IMainProps {
  events: IEventCard[];
  personalEvents: IEventCard[];
  handleRegOnIventOpen: () => void;
}

export default function Main({
  events,
  cities,
  personalEvents,
  handleRegOnIventOpen,
}: IMainProps) {
  return (
    <div className='main'>
      <div>
        <News />
        <EventsPoster
          events={personalEvents}
          text={MAIN_DATA.personalTitle}
          handleRegOnIventOpen={handleRegOnIventOpen}
        />
        <EventsPoster
          events={events}
          text={MAIN_DATA.title}
          handleRegOnIventOpen={handleRegOnIventOpen}
        />
      </div>
      <FiltersContainer 
      // cities={cities}
      />
    </div>
  );
}
