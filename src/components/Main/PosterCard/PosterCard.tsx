import './PosterCard.css';
import CalendarVector from '../../../assets/calendar.svg?react';
import { POSTER_DATA } from '../../../utils/constants';
import { useNavigate } from 'react-router-dom';
import * as Api from './../../../utils/utils';
import { useEffect } from 'react';

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
  getEventId: (eventId: []) => void;
  // getEventId: (data: any) => void;
  isRegistrated: boolean;
  isDeleted: boolean;
}

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
  id,
  getEventId,
  isRegistrated,
  isDeleted,
}: PosterCardProps) {

  const navigate = useNavigate();

   useEffect(() => {
    Api.getEvent(id)
      .then((data) => {
        getEventId(data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [id, getEventId]);

  const handleButtonClick = (id: string) => {
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
            <button
              className='poster-card__button-submit'
              type='submit'
              onClick={() => handleButtonClick(id)}
            >
              {POSTER_DATA.buttonText.registered}
            </button>
          </div>
        ) : status === 'registration is open' ? (
          <div className='poster-card__registration-container'>
            <div className='poster-card__registration-status poster-card__registration-status_open' />
            <p className='poster-card__registration-text'>
              {POSTER_DATA.registration.open}
            </p>
            <button
              className='poster-card__button-submit'
              type='submit'
              onClick={() => handleButtonClick(id)}
            >
              {POSTER_DATA.buttonText.notRegistered}
            </button>
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
