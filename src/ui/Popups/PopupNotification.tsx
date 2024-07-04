import './Popups.css';
import LeftArrow from '../../assets/left-arrow.svg?react';
import { NOTIFICATION_DATA } from '../../utils/constants';
import NotificationForm from '../../components/NotificationForm/NotificationForm';
import { useEffect, useRef } from 'react';

interface PopupNotificationProps {
  handleOverlayClose: () => void;
  setIsNotificationOpen: (type: boolean) => void;
  setIsProfileOpen: (type: boolean) => void;
}

export default function PopupNotification({
  handleOverlayClose,
  setIsProfileOpen,
  setIsNotificationOpen,
}: PopupNotificationProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    setIsNotificationOpen(false);
  };

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
      <div className='popup popup_notification' onClick={handlePopupClick}>
        <div className='popup__header'>
          <LeftArrow onClick={handleClose} />
          <h2 className='popup__title popup__title_notification'>
            {NOTIFICATION_DATA.title}
          </h2>
        </div>
        <NotificationForm
          isNotificationPopup={true}
          setIsProfileOpen={setIsProfileOpen}
          setIsNotificationOpen={setIsNotificationOpen}
        />
      </div>
    </div>
  );
}
