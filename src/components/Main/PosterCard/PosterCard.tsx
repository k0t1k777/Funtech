import './PosterCard.css';
import CalendarVector from '../../../assets/calendar.svg?react';
import { POSTER_DATA } from '../../../utils/constants';

export default function PosterCard() {
  return (
    <div className='poster-card'>
      <div className='poster-card__img'>
        <div className='poster-card__container'>
          <div className='poster-card__date-container'>
            <CalendarVector />
            <p className='poster-card__date'>{POSTER_DATA.date}</p>
          </div>
          <div className='poster-card__buttons'>
            <button className='poster-card__button-edit' type='button' />
            <button className='poster-card__button-on' type='button' />
          </div>
        </div>
      </div>
      <div className='poster-card__info'>
        <h3 className='poster-card__title'>{POSTER_DATA.title}</h3>
        <p className='poster-card__name'>{POSTER_DATA.name}</p>
        <p className='poster-card__profession'>{POSTER_DATA.profession}</p>
        <div className='poster-card__tags'>
          {POSTER_DATA.tags.map((tag, index) => {
            return (
              <p key={index} className='poster-card__tag'>
                {tag}
              </p>
            );
          })}
        </div>
        <div
          className={`poster-card__registration-container ${
            false ? 'poster-card__registration-container_reg_closed' : ''
          }`}
        >
          <div
            className={`poster-card__registration-status ${
              false
                ? 'poster-card__registration-status_close'
                : 'poster-card__registration-status_open'
            }`}
          />
          <p
            className={`poster-card__registration-text ${
              false ? 'poster-card__registration-text_reg_closed' : ''
            }`}
          >
            {false
              ? POSTER_DATA.registration.close
              : POSTER_DATA.registration.open}
          </p>
          {false ? (
            ''
          ) : (
            <button className='poster-card__button-submit' type='submit'>
              {POSTER_DATA.buttonText}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
