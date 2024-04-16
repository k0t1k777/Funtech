import './Popups.css';
import SubmitButton from '../SubmitButton/SubmitButton';
import { POPUP_DATA } from '../../utils/constants';
import { useEffect, useRef, useState } from 'react';

interface PopupRegistrationProps {
  handleOverlayClose: () => void;
  }

export default function PopupRegistration({
  handleOverlayClose,
  // setIsRegistrationOpen,
  // handleLogin,
}: PopupRegistrationProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  // const [values, setValues] = useState({
  //   firstName: '',
  //   secondName: '',
  //   email: '',
  //   phone: '',
  // });

  // function handleSubmit() {
  //   handleLogin({
  //     firstName: values.firstName,
  //     secondName: values.secondName,
  //     email: values.email,
  //     phone: values.phone,
  //   });
  //   setIsRegistrationOpen(false);
  // }

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
        <form>
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
            <SubmitButton title='Регистрация' />
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
