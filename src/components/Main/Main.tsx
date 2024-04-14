import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';
import IEventCard from '../types/EventCard';
import { MAIN_DATA } from './../../utils/constants';
import { SelectProps } from '../Select/Select';


interface IMainProps {
  events: IEventCard[];
  personalEvents: IEventCard[];
  cities: SelectProps[];
  handleRegOnIventOpen: () => void;
  setCityValue?: (value: string) => void;
  cityValue?: string;
}

export default function Main({
  events,
  cities,
  cityValue,
  setCityValue,
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
        cityValue={cityValue}
        setCityValue={setCityValue}
        cities={cities}
      />
    </div>
  );
}
