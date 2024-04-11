import './PosterCard.css';
import CalendarVector from '../../../assets/calendar.svg?react';
import { POSTER_DATA } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import * as Api from './../../../utils/utils';

export interface PosterCardProps {
  name: string;
  id: string;
  organization?: string;
  description?: string | undefined;
  date?: string;
  company: string;
  skill: string;
  event?: string;
  status: string;
  format: string;
  buton: boolean;
  getEventId: (event: Event) => void;}

export default function PosterCard({
  name,
  organization,
  description,
  date,
  company,
  skill,
  event,
  format,
  status,
  buton,
  id,
  getEventId,
}: PosterCardProps) {
  const navigate = useNavigate();

  const handleButtonClick = (id: string) => {
    Api.getEvent(id)
      .then((data) => {
        getEventId(data);
      })
      .catch((error) => {
        console.error(error);
      });
    navigate(`/event/${id}`);
  };
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
        <h3 className='poster-card__title'>{name}</h3>
        <p className='poster-card__name'>{organization}</p>
        <p className='poster-card__profession'>
          {description} в {company}
        </p>
        <div className='poster-card__tags'>
          <p className='poster-card__tag'>{skill}</p>
          <p className='poster-card__tag'>{event}</p>
          <p className='poster-card__tag'>{format}</p>
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
          {buton ? (
            ''
          ) : (
            <button
              className='poster-card__button-submit'
              type='submit'
              onClick={() => handleButtonClick(id)}
            >
              {POSTER_DATA.buttonText}
            </button>
            // <NavLink className='poster-card__link' to={`/event/${id}`}>
            //   <button className='poster-card__button-submit' type='submit'>
            //     {POSTER_DATA.buttonText}
            //   </button>
            // </NavLink>
          )}
        </div>
      </div>
    </div>
  );
}
