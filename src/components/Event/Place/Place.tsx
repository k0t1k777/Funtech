import './Place.css';
import Map from '../../../assets/images/map.png';
import { PLACE_DATA } from './../../../utils/constants';

export interface IPlaceProps {
  event?: any;
}

export default function Place(
  { event }: IPlaceProps
) {

  return (
    <div className='place'>
      <h2 className='place__title'>{PLACE_DATA.mesto}</h2>
      <div>
        <p className='place__adress'>
          {event?.place}, {event?.street}
        </p>
        <img className='place__img' src={Map} alt='address' />
      </div>
    </div>
  );
}
