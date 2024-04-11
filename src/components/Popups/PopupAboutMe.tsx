import './Popups.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import { POPUP_DATA } from '../../utils/constants';
import Back from './../../assets/Back.svg?react';

interface PopupAboutMeProps {
  handleOverlayClose: () => void;
}

export default function PopupAboutMe({
  handleOverlayClose,
}: PopupAboutMeProps) {
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className='popup__overlay' onClick={handleOverlayClose}>
      <div className='popup popup__width_l' onClick={handlePopupClick}>
        <div className='popup__container-back'>
          <Back />
          <p className='popup__back-text'>{POPUP_DATA.aboutMe}</p>
        </div>
        <div className='popup__container-about-me'>
          <div className='popup__container-input'>
            <p className='popup__item'>{POPUP_DATA.aboutName}</p>
            <input className='popup__input' type='text' placeholder='Глеб' />
          </div>
        </div>

        <div className='popup__container'>
          <label>
            <input className='popup__checkbox' type='checkbox' />
          </label>
          <p className='popup__text'>{POPUP_DATA.agry}</p>
        </div>
        <div className='popup__container-button'>
          <SubmitButton title='Регистрация' />
          <SubmitButton
            title='Войти с Яндекс ID'
            backgroundColor='#FFF'
            color='#000000'
            borderColor='#2B2D33'
          />
        </div>
      </div>
    </div>
  );
}
