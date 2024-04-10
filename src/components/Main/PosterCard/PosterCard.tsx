import './PosterCard.css';
import CalendarVector from '../../../assets/calendar.svg?react';
import { POSTER_DATA } from '../../../utils/constants';
import { NavLink } from 'react-router-dom';

export interface PosterCardProps {
  name?: string;
  id?: string;
  organization?: string;
  description?: string;
  date: string;
}

export default function PosterCard({
  name,
  id,
  organization,
  description,
  date,
}: PosterCardProps) {
  return (
    <div className='poster-card'>
      <div className='poster-card__img'>
        <div className='poster-card__container'>
          <div className='poster-card__date-container'>
            <CalendarVector />
            <p className='poster-card__date'>{date}</p>
          </div>
          <div className='poster-card__buttons'>
            <button className='poster-card__button-edit' type='button' />
            <button className='poster-card__button-on' type='button' />
          </div>
        </div>
      </div>
      <div className='poster-card__info'>
        <h3 className='poster-card__title'>{description}</h3>
        <p className='poster-card__name'>{name}</p>
        <p className='poster-card__profession'>{organization}</p>
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
          ></div>
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
            <NavLink className='poster-card__link' to={`/event/${id}`}>
              <button className='poster-card__button-submit' type='submit'>
                {POSTER_DATA.buttonText}
              </button>
            </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
