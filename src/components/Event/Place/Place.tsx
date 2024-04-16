import './Place.css';
import adressImg from '../../../assets/adressImg.png';
import { PLACE_DATA } from './../../../utils/constants';
import IEvent from '../../types/Event';

export interface IPlaceProps {
  event?: IEvent;
}

export default function Place({ event }: IPlaceProps) {
  return (
    <div className='place'>
      <h2 className='placetitle'>{PLACE_DATA.mesto}</h2>
      <div>
        <p className='placeadress'>
          {event?.city?.city_name}, {event?.place}
        </p>
        <img className='place__img' src={adressImg} alt='address' />
      </div>
    </div>
  );
}
