import './News.css';
import RegOpen from './../../assets/Reg-open.svg?react';
import { NEWS_DATA, NEWS_TEXT_DATA } from '../../utils/constants';

export default function News() {
  return (
    <div className='news'>
      <div className='news__registration-container'>
        <RegOpen className='news__registration-img' />
        <p className='news__registration-text'>{NEWS_TEXT_DATA.registration}</p>
      </div>
      <h2 className='news__title'>{NEWS_TEXT_DATA.title}</h2>
      <p className='news__name'>{NEWS_TEXT_DATA.name}</p>
      <div className='news__date-container'>
      <div className='news__registration-container'>

      {/* {NEWS_DATA.map(index, item) => {
        <Calendar className='news__container-img' />
         <p className='news__date'>12 апреля в 19:00</p>
  }} */}




          <Calendar className='news__container-img' />
          <p className='news__date'>12 апреля в 19:00</p>
        </div>
        <div  className='news__registration-container'>
          <Online className='news__container-img' />
          <p className='news__date'>Онлайн</p>
        </div>
      </div>
    </div>
  );
}
