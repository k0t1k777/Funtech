import './Registration.css';
import CalendarIcon from '../../../assets/calendar.svg?react';
import LocationIcon from '../../../assets/location.svg?react';
import DownloadIcon from '../../../assets/download.svg?react';
import PlayIcon from '../../../assets/play.svg?react';
import TelegrammIcon from '../../../assets/telegramm.svg?react';
import VkIcon from '../../../assets/vk.svg?react';
import { useState } from 'react';
import {
  MONTH_NAMES_DATA,
  REGISTRATION_DATA,
} from './../../../utils/constants';
import { EventCard } from '../Event';

export interface RegistrationProps {
  eventId: EventCard[];
}

export default function Registration({ eventId }: RegistrationProps) {
  const [date, setdate] = useState<string>('');
  const eventIdArray = [eventId];
  function getCurrentDateTime() {
    const now = new Date();
    const month = MONTH_NAMES_DATA[now.getMonth()];
    const day = now.getDate().toString().padStart(2, '0');
    return `${day} ${month}`;
  }
  if (date === '' && eventId?.start_time) {
    const firstDateTime = getCurrentDateTime();
    setdate(firstDateTime);
  }
  return (
    <div className='registration'>
      <div className='registration__container'>
        <div className='registration__container'>
          <div className='registration__date'>
            <CalendarIcon />
            <p className='registration__date-text'>{date}</p>
          </div>
          <div className='registration__adress'>
            <LocationIcon />
            <p className='registration__adress-text'>{eventId.format}</p>
            <p className='registration__adress-text'>{eventId.place}</p>
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
          <p className='registration__status-text'>{eventId.status}</p>
        </div>
      </div>
      {eventIdArray.map((event, index) => (
        <p key={index} className='registration__tag'>
          {event.event_type?.event_type_name}
        </p>
      ))}
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
      <button className='registration__button-reg'>
        {REGISTRATION_DATA.registration}
      </button>
    </div>
  );
}
