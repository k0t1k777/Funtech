import './Place.css';
import Map from '../../../assets/images/map.png';
import { PLACE_DATA } from './../../../utils/constants';
// import IEvent from '../../types/Event';

// export interface IPlaceProps {
//   event?: IEvent;
// }

export default function Place(
  // { event }: IPlaceProps
) {
  return (
    <div className='place'>
      <h2 className='place__title'>{PLACE_DATA.mesto}</h2>
      <div>
        {/* <p className='place__adress'>
          {event?.city?.city_name}, {event?.place}
        </p> */}
        <img className='place__img' src={Map} alt='address' />
      </div>
    </div>
  );
}
