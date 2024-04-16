import './Popups.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import { useRef, useState, useEffect } from 'react';
import * as Yup from 'yup';
import { ERROR_DATA, POPUP_DATA } from './../../utils/constants'

interface PopupEnterProps {
  handleOverlayClose: () => void;
  handleRegistrationOpen: () => void;
}

export default function PopupEnter({
  handleOverlayClose,
  handleRegistrationOpen,
}: PopupEnterProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState(ERROR_DATA.text);
  const [isValid, setIsValid] = useState(true);

  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    setErrorText('');
  };

  const handleValidation = async (value: string) => {
    try {
      await schema.validate({ inputValue: value });
      setIsValid(true);
    } catch (error) {
      setIsValid(false);
    }
  };

  const schema = Yup.object().shape({
    inputValue: Yup.string().required(ERROR_DATA.text),
  });

  useEffect(() => {
    if (modalRef.current) {
      const modal = modalRef.current;
      modal.style.display = 'block';
      modal.style.opacity = '0';
      modal.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 400,
        easing: 'ease-in-out',
        fill: 'forwards',
      });
    }
  }, []);

  return (
    <div className='popup__overlay' onClick={handleOverlayClose} ref={modalRef}>
      <div className='popup' onClick={handlePopupClick}>
        <div className='popup__input-container'>
          <div>
            <input
              className={`popup__input ${!isValid ? 'input__invalid' : ''}`}
              placeholder='Логин'
              name='email'
              required={true}
              onChange={handleChange}
              onBlur={() => handleValidation(inputValue)}
            />
            {!isValid && <div className='error__message'>{errorText}</div>}
          </div>
          <div>
            <input
              className={`popup__input ${!isValid ? 'input__invalid' : ''}`}
              type='password'
              placeholder='Пароль'
              name='password'
              required={true}
              onChange={handleChange}
              onBlur={() => handleValidation(inputValue)}
            />
            {!isValid && <div className='error__message'>{errorText}</div>}
          </div>
        </div>
        <div className='popup__container-button'>
          <SubmitButton title={POPUP_DATA.enter} />
          <SubmitButton
            title='Войти с Яндекс ID'
            backgroundColor='#FFF'
            color='#000000'
            borderColor='#2B2D33'
          />
          <SubmitButton
            title={POPUP_DATA.reg}
            backgroundColor='#FFF'
            color='#C29AF5'
            borderColor='#C29AF5'
            onClick={handleRegistrationOpen}
          />
        </div>
      </div>
    </div>
  );
}
