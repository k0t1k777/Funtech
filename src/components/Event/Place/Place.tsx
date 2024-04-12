import './Place.css';
import adressImg from '../../../assets/adressImg.png';
import { PLACE_DATA } from './../../../utils/constants';
import { EventCard } from '../Event';

export interface PlaceProps {
  eventId: EventCard[];
}

export default function Place({ eventId }: PlaceProps) {
  const eventIdArray = [eventId];

  return (
    <div className='place'>
      <h2 className='placetitle'>{PLACE_DATA.mesto}</h2>
      <div>
        {eventIdArray.map((event, index) => (
          <p key={index} className='placeadress'>
            {event.city?.city_name}, {event.place}
          </p>
        ))}
        <img className='place__img' src={adressImg} alt='address' />
      </div>
    </div>
  );
}

