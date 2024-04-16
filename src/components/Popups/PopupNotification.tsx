import './Popups.css';
import LeftArrow from '../../assets/left-arrow.svg?react';
import { NOTIFICATION_DATA } from '../../utils/constants';
import NotificationForm from '../NotificationForm/NotificationForm';

interface PopupNotificationProps {
  handleOverlayClose: () => void;
  setIsNotificationOpen: (type: boolean) => void;
}

export default function PopupNotification({
  handleOverlayClose,
  setIsNotificationOpen,
}: PopupNotificationProps) {
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    setIsNotificationOpen(false);
  };

  return (
    <div className='popup__overlay' onClick={handleOverlayClose}>
      <div className='popup popup_notification' onClick={handlePopupClick}>
        <div className='popup__header'>
          <LeftArrow onClick={handleClose}/>
          <h2 className='popup__title popup__title_notification'>
            {NOTIFICATION_DATA.title}
          </h2>
        </div>
        <NotificationForm isNotificationPopup={true} />
      </div>
    </div>
  );
}
