import './Registration.css';
import CalendarIcon from '../../../assets/calendar.svg?react';
import LocationIcon from '../../../assets/location.svg?react';
import DownloadIcon from '../../../assets/download.svg?react';
import PlayIcon from '../../../assets/play.svg?react';
import TelegrammIcon from '../../../assets/telegramm.svg?react';
import VkIcon from '../../../assets/vk.svg?react';
import { getFullDate } from '../../../helpers/Date';
import { REGISTRATION_DATA } from './../../../utils/constants';
import { EventCard } from '../Plan/Plan';

export interface RegistrationProps {
  eventId: EventCard;
  handleRegOnIventOpen: () => void;
}

export default function Registration({
  eventId,
  handleRegOnIventOpen,
}: RegistrationProps) {
  return (
    <div className='registration'>
      <div className='registration__container'>
        <div className='registration__container'>
          <div className='registration__date'>
            <CalendarIcon />
            <p className='registration__date-text'>
              {getFullDate(eventId.start_time)}
            </p>
          </div>
          {eventId.format === 'online' ? (
            ''
          ) : (
            <div className='registration__adress'>
              <LocationIcon />
              <p className='registration__adress-text'>{eventId.place}</p>
            </div>
          )}
        </div>
        <div className='registration__buttons'>
          <button className='registration__button-edit' />
          <button className='registration__button-on' />
        </div>
      </div>
      <div className='registration__container-img'>
        <img
          className='registration__img'
          src={eventId.image}
          alt='Фон события'
        />
        <div className='registration__status'>
          <div
            className={`registration__status-icon ${
              eventId.status === 'registration is open'
                ? 'registration__status-icon_open'
                : 'registration__status-icon_close'
            }`}
          />
          <p className='registration__status-text'>{eventId.status}</p>
        </div>
      </div>
      <div className='registration__tags'>
        <p className='registration__tag'>
          {eventId.specializations.specialization_name}
        </p>
        <p className='registration__tag'>
          {eventId.event_type.event_type_name}
        </p>
        <p className='registration__tag'>{eventId.format}</p>
      </div>

      <div className='registration__container'>
        <button className='registration__download' type='button'>
          <DownloadIcon />
          <p className='registration__download-text'>
            {REGISTRATION_DATA.download}
          </p>
        </button>
        <a className='registration__play' href='#'>
          <PlayIcon />
          <p className='registration__play-text'>{REGISTRATION_DATA.link}</p>
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
      <button
        className='registration__button-reg'
        onClick={handleRegOnIventOpen}
      >
        {REGISTRATION_DATA.regButton}
      </button>
    </div>
  );
}
