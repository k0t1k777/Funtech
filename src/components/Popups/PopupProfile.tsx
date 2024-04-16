import './Popups.css';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Avatar from './../../assets/PhotoWoman.png';
import { POPUP_DATA } from './../../utils/constants';

interface IPopupEnterProps {
  handleOverlayClose: () => void;
  handleCreateEventOpen: () => void;
  handlePersonalOpen: () => void;
  handleNotificationOpen: () => void;
}

export default function PopupProfile({
  handleOverlayClose,
  handleCreateEventOpen,
  handlePersonalOpen,
  handleNotificationOpen,
}: IPopupEnterProps) {
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const firstName = localStorage.getItem('firstName');
  const secondName = localStorage.getItem('secondName');

  return (
    <div className='popup__overlay' onClick={handleOverlayClose}>
      <div className='popup popup__width_s' onClick={handlePopupClick}>
        <div className='popup__container-profile'>
          <img className='popup__img' src={Avatar} alt='Фото пользователя' />
          <div className='popup__container-items'>
            <p className='popup__name'>
              {firstName} {secondName}
            </p>
            <p className='popup__name'>{POPUP_DATA.user}</p>
          </div>
        </div>
        <ul className='popup__lists'>
          <li className='popup__item' onClick={handlePersonalOpen}>
            {POPUP_DATA.data}
          </li>
          <li className='popup__item' onClick={handleNotificationOpen}>
            {POPUP_DATA.notifications}
          </li>
          <li className='popup__item' onClick={handleCreateEventOpen}>
            {POPUP_DATA.event}
          </li>
        </ul>
        <div className='popup__container-button'>
          <SubmitButton
            title='Выйти'
            backgroundColor='#FFF'
            width='100%'
            color='#000000'
            borderColor='#2B2D33'
          />
        </div>
      </div>
    </div>
  );
}
