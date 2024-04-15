import './Popups.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import { POPUP_DATA } from '../../utils/constants';
import { useState } from 'react';

interface PopupRegistrationProps {
  handleOverlayClose: () => void;
  handleRegister: (data: {
    email: string;
    phone: string;
    firstName: string;
    secondName: string;
  }) => void;
}

export default function PopupRegistration({
  handleOverlayClose,
  handleRegister,
}: PopupRegistrationProps) {
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const [values, setValues] = useState({
    firstName: '',
    secondName: '',
    email: '',
    phone: '',
  });

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    handleRegister({
      firstName: values.firstName,
      secondName: values.secondName,
      email: values.email,
      phone: values.phone,
      
    });
  }

  return (
    <div className='popup__overlay' onClick={handleOverlayClose}>
      <div className='popup' onClick={handlePopupClick}>
        <form onSubmit={handleSubmit}>
          <div className='popup__input-container'>
            <input
              className='popup__input'
              type='text'
              placeholder='Имя'
              name='firstName'
              required={true}
              onChange={(e) =>
                setValues({ ...values, firstName: e.target.value })
              }
            />
            <input
              className='popup__input'
              type='text'
              placeholder='Фамилия'
              name='secondName'
              required={true}
              onChange={(e) =>
                setValues({ ...values, secondName: e.target.value })
              }
            />
            <input
              className='popup__input'
              type='text'
              placeholder='Почта'
              name='email'
              required={true}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            />
            <input
              className='popup__input'
              type='text'
              placeholder='Телефон'
              pattern='^(\+7|7|8)\d{10}$'
              name='phone'
              required={true}
              onChange={(e) => setValues({ ...values, phone: e.target.value })}
            />
          </div>
          <div className='popup__container'>
            <label>
              <input className='popup__checkbox' type='checkbox' />
            </label>
            <p className='popup__text'>{POPUP_DATA.agry}</p>
          </div>
          <div className='popup__container-button'>
            <SubmitButton title='Регистрация'  onClick={handleSubmit} />
            <SubmitButton
              title='Войти с Яндекс ID'
              backgroundColor='#FFF'
              color='#000000'
              borderColor='#2B2D33'
            />
          </div>
        </form>
      </div>
    </div>
  );
}
