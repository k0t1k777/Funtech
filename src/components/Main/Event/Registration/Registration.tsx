import 'src/components/Main/Event/Registration/Registration.css';
import CalendarIcon from 'src/assets/calendar.svg?react';
import LocationIcon from 'src/assets/location.svg?react';
import DownloadIcon from 'src/assets/download.svg?react';
import PlayIcon from 'src/assets/play.svg?react';
import TelegrammIcon from 'src/assets/telegramm.svg?react';
import VkIcon from 'src/assets/vk.svg?react';
import { getFullDate } from 'src/helpers/Date';
import { REGISTRATION_DATA } from 'src/utils/constants';

export interface IRegistrationProps {
  event?: any;
  handleRegOnIventOpen: () => void;
  handleCreateEventOpen: () => void;
}

export default function Registration({
  event,
  handleRegOnIventOpen,
  handleCreateEventOpen,
}: IRegistrationProps) {
  return (
    <div className='registration'>
      <div className='registration__container'>
        <div className='registration__container'>
          <div className='registration__date'>
            <CalendarIcon />
            <p className='registration__date-text'>
              {event && getFullDate(event?.start_time)}
            </p>
          </div>
          {event && event.format === 'online' ? (
            ''
          ) : (
            <div className='registration__adress'>
              <LocationIcon />
              <p className='registration__adress-text'>{event?.place}</p>
            </div>
          )}
        </div>
        <div className='registration__buttons'>
          <button
            className='registration__button-edit'
            onClick={handleCreateEventOpen}
          />
          <button className='registration__button-on' />
        </div>
      </div>
      <div className='registration__container-img'>
        <img
          className='registration__img'
          src={event?.image}
          alt='Фон события'
        />
        <div className='registration__status'>
          <div
            className={`registration__status-icon ${
              event?.status === 'registration is open'
                ? 'registration__status-icon_open'
                : 'registration__status-icon_close'
            }`}
          />
          <p className='registration__status-text'>{event?.status}</p>
        </div>
      </div>
      <div className='registration__tags'>
        <p className='registration__tag'>
          {event?.specializations?.specialization_name}
        </p>
        <p className='registration__tag'>
          {event?.event_type?.event_type_name}
        </p>
        <p className='registration__tag'>{event?.format}</p>
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
        className={`${
          event &&
          event.status === 'registration is closed' &&
          event &&
          event.is_registrated === false
            ? 'registration__button-reg disabled'
            : 'registration__button-reg'
        }`}
        disabled={event && event.status === 'registration is closed'}
        onClick={handleRegOnIventOpen}
      >
        {(((event &&
          event.status === 'registration is open' &&
          event &&
          event.is_registrated === false) ||
          (event &&
            event.status === 'registration is closed' &&
            event &&
            event.is_registrated === false)) &&
          `${REGISTRATION_DATA.regButton}`) ||
          (event &&
            event.status === 'registration is closed' &&
            event &&
            event.is_registrated === true &&
            `${REGISTRATION_DATA.cancelButton}`)}
      </button>
    </div>
  );
}
