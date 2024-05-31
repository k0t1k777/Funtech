import './PosterCard.css';
import CalendarVector from '../../../assets/calendar.svg?react';
import { POSTER_DATA } from '../../../utils/constants';
// import { useNavigate } from 'react-router-dom';

interface IPosterCardProps {
  name: string;
  id: number;
  organization?: string;
  description?: string | undefined;
  date?: string;
  company: string;
  skill: string;
  event?: string;
  status: string;
  format: string;
  image: string;
  isRegistrated: boolean;
  isDeleted: boolean;
  handleRegOnIventOpen: () => void;
  handleCreateEventOpen: () => void;
}

export default function PosterCard(
  {
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
  isRegistrated,
  isDeleted,
  image,
  handleCreateEventOpen,
  handleRegOnIventOpen,
}: IPosterCardProps
) {
  // const navigate = useNavigate();
  console.log('id: ', id);

  const handleNavigateOnEvent = (e: React.MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
  if (target.id === '0') {
    return;
  }
  // navigate(`/event/${id}`);
};

  return (
    <div className='poster-card' onMouseUp={handleNavigateOnEvent}>
      <div className='poster-card__img'>
        <img src={image} className='poster-card__img' alt="картинка карточки" />
        <div className='poster-card__container'>
          <div className='poster-card__date-container'>
            <CalendarVector />
            <p className='poster-card__date'>{date}</p>
          </div>
          <div className='poster-card__buttons'>
            <button
              id='0'
              className='poster-card__button-edit'
              type='button'
              onClick={handleCreateEventOpen}
            />
            {isDeleted ? (
              <button
                id='0'
                className='poster-card__button-off'
                type='button'
              />
            ) : (
              <button id='0' className='poster-card__button-on' type='button' />
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
            <div
              className='poster-card__registration-status
             poster-card__registration-status_registered'
            />
            <p className='poster-card__registration-text'>
              {POSTER_DATA.registration.registered}
            </p>
            <button
              id='0'
              className='poster-card__button-submit'
              type='submit'
              onClick={handleRegOnIventOpen}
            >
              {POSTER_DATA.buttonText.registered}
            </button>
          </div>
        ) : status === 'registration is open' ? (
          <div className='poster-card__registration-container'>
            <div
              className='poster-card__registration-status
             poster-card__registration-status_open'
            />
            <p className='poster-card__registration-text'>
              {POSTER_DATA.registration.open}
            </p>
            <button
              id='0'
              className='poster-card__button-submit'
              type='submit'
              onClick={handleRegOnIventOpen}
            >
              {POSTER_DATA.buttonText.notRegistered}
            </button>
          </div>
        ) : (
          <div
            className='poster-card__registration-container
           poster-card__registration-container_reg_closed'
          >
            <div
              className='poster-card__registration-status
             poster-card__registration-status_close'
            />
            <p className='poster-card__registration-text'>
              {POSTER_DATA.registration.close}
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
