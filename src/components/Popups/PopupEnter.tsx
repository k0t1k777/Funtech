import './Popups.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import { useRef, useState, useEffect } from 'react';

interface PopupEnterProps {
  handleOverlayClose: () => void;
  setIsRegistrationOpen: (type: boolean) => void;
  handleLogin: (data: { email: string; password: string }) => void;
}

export default function PopupEnter({
  handleOverlayClose,
  setIsRegistrationOpen,
  handleLogin,
}: PopupEnterProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    handleValidation(value);
    setErrorText('');
    const filteredSuggestions = options.filter((option) =>
      option.toLowerCase().includes(value.toLowerCase())
    );
    setSuggestions(filteredSuggestions);
    const inputElement = event.target;
    if (value.trim() !== '') {
      inputElement.classList.remove('input__invalid');
      inputElement.classList.add('input__valid');
    } else {
      inputElement.classList.add('input__invalid');
      inputElement.classList.remove('input__valid');
    }
  };

  const [values, setValues] = useState({
    firstName: '',
    secondName: '',
    email: '',
    phone: '',
  });

  function handleSubmit() {
    handleLogin({
      email: values.email,
      password: values.phone,
    });
    setIsRegistrationOpen(false);
  }

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
          <input
            className='popup__input'
            placeholder='Логин'
            name='email'
            required={true}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
          <input
            className='popup__input'
            type='password'
            placeholder='Пароль'
            name='password'
            required={true}
            onChange={(e) => setValues({ ...values, email: e.target.value })}
          />
        </div>
        <div className='popup__container-button'>
          <SubmitButton title='Войти' onClick={handleSubmit} />
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
