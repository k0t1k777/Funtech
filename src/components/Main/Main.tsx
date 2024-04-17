import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';
import EventsPoster from './EventsPoster/EventsPoster';
import IEventCard from '../types/EventCard';
import { MAIN_DATA } from './../../utils/constants';
import { Сities } from '../..//components/Main/FiltersContainer/FiltersContainer';

interface IMainProps {
  events: IEventCard[];
  personalEvents: IEventCard[];
  cities: Сities[];
  handleRegOnIventOpen: () => void;
  setCityValue?: (value: string) => void;
  handleCreateEventOpen: () => void;
  cityValue?: string;
  superUser: boolean;
  loggedIn: boolean;
}

export default function Main({
  events,
  cities,
  cityValue,
  superUser,
  loggedIn,
  setCityValue,
  personalEvents,
  handleRegOnIventOpen,
  handleCreateEventOpen,
}: IMainProps) {
  return (
    <div className='main'>
      <div>
        <News />
        {loggedIn && superUser && (
          <EventsPoster
            events={personalEvents}
            text={MAIN_DATA.personalTitle}
            handleRegOnIventOpen={handleRegOnIventOpen}
            handleCreateEventOpen={handleCreateEventOpen}
            superUser={superUser}
          />
        )}
        <EventsPoster
          events={events}
          text={MAIN_DATA.title}
          handleRegOnIventOpen={handleRegOnIventOpen}
          handleCreateEventOpen={handleCreateEventOpen}
          superUser={superUser}
        />
      </div>
      <FiltersContainer
        loggedIn={loggedIn}
        superUser={superUser}
        cityValue={cityValue}
        setCityValue={setCityValue}
        cities={cities}
      />
    </div>
  );
}
