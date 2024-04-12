import './Event.css';
import About from './About/About';
import Speakers from './Speakers/Speakers';
import Plan from './Plan/Plan';
import Registration from './Registration/Registration';
import Place from './Place/Place';
import Courses from './Courses/Courses';

export interface EventProps {
  eventId: EventCard[];
}

export interface EventCard {
  name: string[];
  description: string;
  eventId: EventCard[];
  format?: string;
  place?: string;
  start_time?: string;
  status?: string;
  city: {
    city_name?: string;
  }[];
  event_parts: {
    event_part_name?: string;
    event_part_description?: string;
    event_part_start_time?: string;
    position?: string;
    company?: string;
  }[];
}

export default function Event({ eventId }: EventProps) {
  // const [showProgram, setShowProgram] = useState(program);

  // useEffect(() => {
  //   setShowProgram(program);
  // }, [program]);

  return (
    <div className='event'>
      <div className='event__container'>
        <About eventId={eventId} />
        <Speakers />
        <Plan eventId={eventId} />
      </div>
      <div className='event__container'>
        <Registration eventId={eventId} />
        <Place eventId={eventId} />
      </div>
      <Courses />
    </div>
  );
}
