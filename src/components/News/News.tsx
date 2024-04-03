import './News.css';
import RegOpen from './../../assets/Reg-open.svg?react';
import PhotoNews from './../../assets/PhotoWoman.png';
import PhotoWaves from './../../assets/Waves.svg';
import { NEWS_DATA, NEWS_TEXT_DATA } from '../../utils/constants';

export default function News() {
  return (
    <div className='news'>
        <div className='news__registration-container'>
          <RegOpen className='news__registration-img' />
          <p className='news__registration-text'>
            {NEWS_TEXT_DATA.registration}
          </p>
        </div>
        <h2 className='news__title'>{NEWS_TEXT_DATA.title}</h2>
        <p className='news__name'>{NEWS_TEXT_DATA.name}</p>
        <div className='news__registration-wrapper'>
          {NEWS_DATA.map((item, index) => {
            return (
              <div key={index} className='news__registration-container-item'>
                <img
                  src={item.img}
                  className='news__container-img'
                  alt='иконка действия'
                />
                <p className='news__date'>{item.text}</p>
              </div>
            );
          })}
        </div>
      <img src={PhotoNews} className='news__photo' alt='фото ивента' />
      <img src={PhotoWaves} className='news__waves' alt='волны бэкграунда' />
    </div>
  );
}
