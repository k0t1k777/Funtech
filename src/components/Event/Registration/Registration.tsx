import './Registration.css';
import CalendarIcon from '../../../assets/calendar.svg?react';
import LocationIcon from '../../../assets/location.svg?react';
import DownloadIcon from '../../../assets/download.svg?react';
import PlayIcon from '../../../assets/play.svg?react';
import TelegrammIcon from '../../../assets/telegramm.svg?react';
import VkIcon from '../../../assets/vk.svg?react';

export default function Registration() {
  return (
    <div className='registration'>
      <div className='registration__container'>
        <div className='registration__container'>
          <div className='registration__date'>
            <CalendarIcon />
            <p className='registration__date-text'>13 апреля 2024 в 15:00</p>
          </div>
          <div className='registration__adress'>
            <LocationIcon />
            <p className='registration__adress-text'>
              Офлайн БЦ СуперСкайПлаза
            </p>
          </div>
        </div>
        <div className='registration__buttons'>
          <button className='registration__button-edit' />
          <button className='registration__button-on' />
        </div>
      </div>
      <div className='registration__img'>
        <div className='registration__status'>
          <div
            className={`registration__status-icon ${
              false
                ? 'registration__status-icon_close'
                : 'registration__status-icon_open'
            }`}
          />
          <p className='registration__status-text'>Регистрация открыта</p>
        </div>
      </div>
      <div className='registration__tags'>
        <p className='registration__tag'>AI</p>
        <p className='registration__tag'>ML</p>
        <p className='registration__tag'>Data Science</p>
        <p className='registration__tag'>Data Analitics</p>
        <p className='registration__tag'>Party</p>
      </div>
      <div className='registration__container'>
        <button className='registration__download' type='button'>
          <DownloadIcon />
          <p className='registration__download-text'>
            Скачать дополнительные материалы
          </p>
        </button>
        <a className='registration__play' href='#'>
          <PlayIcon />
          <p className='registration__play-text'>Ссылка на трансляцию</p>
        </a>
      </div>
      <div className='registration__share'>
        <a className='registration__link' href='#'>
          <TelegrammIcon />
        </a>
        <a className='registration__link' href='#'>
          <VkIcon />
        </a>
        <button className='registration__button-other' />
      </div>
      <button className='registration__button-reg'>Зарегистрироваться</button>
    </div>
  );
}
