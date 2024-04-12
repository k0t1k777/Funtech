import './PosterCard.css';
import CalendarVector from '../../../assets/calendar.svg?react';
import { POSTER_DATA } from '../../../utils/constants';
import { NavLink } from 'react-router-dom';

export interface PosterCardProps {
  name: string;
  id: string;
  organization?: string | undefined;
  description?: string | undefined;
  date: string;
  company: string;
  skill: string;
  event: string;
  status: string;
  format: string;
  isRegistrated: boolean;
  isDeleted: boolean;
}

export default function PosterCard({
  name,
  id,
  organization,
  description,
  date,
  company,
  skill,
  event,
  format,
  status,
  isRegistrated,
  isDeleted,
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
            {isDeleted ? (
              <button className='poster-card__button-off' type='button' />
            ) : (
              <button className='poster-card__button-on' type='button' />
            )}
          </div>
        </div>
      </div>
      <div
        className={`poster-card__info ${
          status === 'registration is open'
            ? ''
            : 'poster-card__info_reg_closed'
        }`}
      >
        <h3 className='poster-card__title'>{name}</h3>
        <p className='poster-card__name'>{organization}</p>
        <p className='poster-card__profession'>
          {description}, {company}
        </p>
        <div className='poster-card__tags'>
          <p className='poster-card__tag'>{skill}</p>
          <p className='poster-card__tag'>{event}</p>
          <p className='poster-card__tag'>{format}</p>
        </div>
        {isRegistrated ? (
          <div className='poster-card__registration-container'>
            <div className='poster-card__registration-status poster-card__registration-status_registered' />
            <p className='poster-card__registration-text'>
              {POSTER_DATA.registration.registered}
            </p>
            <NavLink className='poster-card__link' to={`/event/${id}`}>
              <button
                className='poster-card__button-submit poster-card__button-submit_registered'
                type='submit'
              >
                {POSTER_DATA.buttonText.registered}
              </button>
            </NavLink>
          </div>
        ) : status === 'registration is open' ? (
          <div className='poster-card__registration-container'>
            <div className='poster-card__registration-status poster-card__registration-status_open' />
            <p className='poster-card__registration-text'>
              {POSTER_DATA.registration.open}
            </p>
            <NavLink className='poster-card__link' to={`/event/${id}`}>
              <button className='poster-card__button-submit' type='submit'>
                {POSTER_DATA.buttonText.notRegistered}
              </button>
            </NavLink>
          </div>
        ) : (
          <div className='poster-card__registration-container poster-card__registration-container_reg_closed'>
            <div className='poster-card__registration-status poster-card__registration-status_close' />
            <p className='poster-card__registration-text'>
              {POSTER_DATA.registration.close}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
