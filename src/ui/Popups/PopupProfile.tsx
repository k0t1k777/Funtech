import 'src/ui/Popups/Popups.css';
import SubmitButton from 'src/ui/SubmitButton/SubmitButton';
import Avatar from 'src/assets/Profile.svg?react';
import { POPUP_DATA } from 'src/utils/constants';
import { useEffect, useRef } from 'react';

interface IPopupEnterProps {
  handleOverlayClose: () => void;
  handleCreateEventOpen: () => void;
  handlePersonalOpen: () => void;
  handleNotificationOpen: () => void;
  setIsProfileOpen: (type: boolean) => void;
  setLoggedIn: (type: boolean) => void;
}

export default function PopupProfile({
  handleOverlayClose,
  handleCreateEventOpen,
  handlePersonalOpen,
  handleNotificationOpen,
  setIsProfileOpen,
  setLoggedIn,
}: IPopupEnterProps) {
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };
  const modalRef = useRef<HTMLDivElement>(null);
  const firstName = localStorage.getItem('firstName');
  const secondName = localStorage.getItem('secondName');

  function handleClose() {
    setIsProfileOpen(false);
    setLoggedIn(false);
    document.body.style.overflow = 'auto'

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
      <div className='popup popup__width_s' onClick={handlePopupClick}>
        <div className='popup__container-profile'>
        <Avatar className='popup__img'/>
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
            onClick={handleClose}
          />
        </div>
      </div>
    </div>
  );
}
