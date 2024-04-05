import './Popups.css';
import SubmitButton from '../SubmitButton/SubmitButton';

interface PopupEnterProps {
  handeleEnterOpen: () => void;
  handleOverlayClose: () => void;
}

export default function PopupEnter({
  handeleEnterOpen,
  handleOverlayClose,
}: PopupEnterProps) {
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className='popup__overlay' onClick={handleOverlayClose}>
      <div className='popup' onClick={handlePopupClick}>
        <div className='popup__input-container'>
          <input
            className='popup__input'
            type='text'
            placeholder='Логин'
          />
          <input
            className='popup__input'
            type='password'
            placeholder='Пароль'
          />
        </div>
        <div className='popup__container-button'>
          <SubmitButton title='Войти' onClick={handeleEnterOpen} />
          <SubmitButton
            title='Войти с Яндекс ID'
            backgroundColor='#FFF'
            color='#000000'
            borderColor='#2B2D33'
          />
          <SubmitButton
            title='Зарегистрироваться'
            backgroundColor='#FFF'
            color='#C29AF5'
            borderColor='#C29AF5'
          />
        </div>
      </div>
    </div>
  );
}
