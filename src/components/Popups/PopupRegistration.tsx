import './Popups.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import { useEffect, useRef, useState } from 'react';
import * as Yup from 'yup';
import { ERROR_DATA, POPUP_DATA } from './../../utils/constants';

interface PopupRegistrationProps {
  handleOverlayClose: () => void;
  handleLogin: () => void;
}

export default function PopupRegistration({
  handleOverlayClose,
  handleLogin,
}: PopupRegistrationProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [inputValue, setInputValue] = useState('');
  const [errorText, setErrorText] = useState(ERROR_DATA.text);
  const [isValid, setIsValid] = useState(true);
  const [firstName, setFirstName] = useState(
    localStorage.getItem('firstName') || ''
  );
  const [secondName, setSecondName] = useState(
    localStorage.getItem('secondName') || ''
  );
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name === 'firstName') {
      setFirstName(value);
      setInputValue(value);
    } else if (name === 'secondName') {
      setSecondName(value);
      setInputValue(value);
    }

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

  useEffect(() => {
    localStorage.setItem('firstName', firstName);
    localStorage.setItem('secondName', secondName);
  }, [firstName, secondName]);

  return (
    <div className='popup__overlay' onClick={handleOverlayClose} ref={modalRef}>
      <div className='popup' onClick={handlePopupClick}>
        <div className='popup__input-container'>
          <div>
            <input
              className={`popup__input ${!isValid ? 'input__invalid' : ''}`}
              type='text'
              placeholder='Имя'
              name='firstName'
              required={true}
              onChange={handleChange}
              onBlur={() => handleValidation(inputValue)}
            />
            {!isValid && <div className='error__message'>{errorText}</div>}
          </div>
          <div>
            <input
              className={`popup__input ${!isValid ? 'input__invalid' : ''}`}
              type='text'
              placeholder='Фамилия'
              name='secondName'
              required={true}
              onChange={handleChange}
              onBlur={() => handleValidation(inputValue)}
            />
            {!isValid && <div className='error__message'>{errorText}</div>}
          </div>
          <div>
            <input
              className={`popup__input ${!isValid ? 'input__invalid' : ''}`}
              type='text'
              placeholder='Почта'
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
              type='text'
              placeholder='Телефон'
              pattern='^(\+7|7|8)\d{10}$'
              name='phone'
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
        <div className='popup__container'>
          <label>
            <input className='popup__checkbox' type='checkbox' />
          </label>
          <p className='popup__text'>{POPUP_DATA.agry}</p>
        </div>
        <div className='popup__container-button'>
          <SubmitButton title={POPUP_DATA.registration} onClick={handleLogin} />
          <SubmitButton
            title={POPUP_DATA.enterYandex}
            backgroundColor='#FFF'
            color='#000000'
            borderColor='#2B2D33'
          />
        </div>
      </div>
    </div>
  );
}
