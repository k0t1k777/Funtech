import 'src/components/Main/Event/Place/Place.css';
import Map from 'src/assets/images/map.png';
import { PLACE_DATA } from 'src/utils/constants';

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
