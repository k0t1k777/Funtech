import './Popups.css';
import SubmitButton from '../../components/SubmitButton/SubmitButton';
import Avatar from './../../assets/PhotoWoman.png';

interface PopupEnterProps {
  handeleProfileOpen: () => void;
  handleOverlayClose: () => void;
}

export default function PopupProfile({
  handleOverlayClose,
}: PopupEnterProps) {
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className='popup__overlay' onClick={handleOverlayClose}>
      <div className='popup popup__type_width' onClick={handlePopupClick}>
        <div className='popup__container-profile'>
          <img className='popup__img' src={Avatar} alt='Фото пользователя' />
          <div className='popup__container-items'>
            <p className='popup__name'>Дарья&nbsp;Ивентовна</p>
            <p className='popup__name'>Администратор</p>
          </div>
        </div>
        <ul className='popup__lists'>
          <li className='popup__item'>Личные данные</li>
          <li className='popup__item'>Уведомления</li>
          <li className='popup__item'>Добавить&nbsp;мероприятие</li>
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