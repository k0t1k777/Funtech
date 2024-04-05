import './Popups.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import { POPUP_DATA } from '../../utils/constants';

interface PopupRegistrationProps {
  handeleRegistrationOpen: () => void;
  handleOverlayClose: () => void;
}

export default function PopupRegistration({
  handeleRegistrationOpen,
  handleOverlayClose,
}: PopupRegistrationProps) {
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className='popup-registration__overlay' onClick={handleOverlayClose}>
      <div className='popup-registration' onClick={handlePopupClick}>
        <div className='popup-registration__input-container'>
          <input
            className='popup-registration__input'
            type='text'
            placeholder='Имя'
          />
          <input
            className='popup-registration__input'
            type='text'
            placeholder='Фамилия'
          />
          <input
            className='popup-registration__input'
            type='text'
            placeholder='Почта'
          />
          <input
            className='popup-registration__input'
            type='text'
            placeholder='Телефон'
          />
        </div>
        <div className='popup-registration__container'>
          <input className='popup-registration__checkbox' type='checkbox' />
          <p className='popup-registration__text'>{POPUP_DATA.agry}</p>
        </div>
        <SubmitButton title='Регистрация' onClick={handeleRegistrationOpen} />
        <SubmitButton
          title='Войти с Яндекс ID'
          backgroundColor='#FFF'
          color='#000000'
          borderColor='#2B2D33'
        />
      </div>
    </div>
  );
}
