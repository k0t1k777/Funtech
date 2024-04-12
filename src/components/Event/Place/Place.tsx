import './Place.css';
import adressImg from '../../../assets/adressImg.png';
import {
  PLACE_DATA,
} from './../../../utils/constants';

export interface PlaceProps {
  eventId: EventCard[];
}

export interface EventCard {
  place?: string;
  city?: [
    {
      city_name?: string;
    }
  ];
}

export default function Place({ eventId }: PlaceProps) {
  return (
    <div className='place'>
      <h2 className='place__title'>{PLACE_DATA.mesto}</h2>
      <p className='place__adress'>{eventId.city?.city_name} {eventId?.place}</p>
      <img className='place__img' src={adressImg} alt='adress' />
    </div>
  );
}
