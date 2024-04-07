import './Place.css';
import adressImg from '../../../assets/adressImg.png';

export default function Place() {
  return (
    <div className='place'>
      <h2 className='place__title'>Место</h2>
      <p className='place__adress'>Москва, ул. Ленинская Слобода 26 стр 4</p>
      <img className='place__img' src={adressImg} alt='adress' />
    </div>
  );
}
