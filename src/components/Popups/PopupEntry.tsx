import './Popups.css';
import { ENTRY_DATA } from '../../utils/constants';
import NotificationForm from '../NotificationForm/NotificationForm';

interface PopupEntryProps {
  handleOverlayClose: () => void;
}

export default function PopupEntry({ handleOverlayClose }: PopupEntryProps) {
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div
      className='popup__overlay'
      onClick={handleOverlayClose}
    >
      <div className='popup popup_entry' onClick={handlePopupClick}>
        <h2 className='popup__title'>{ENTRY_DATA.title}</h2>
        <h3 className='popup__date'>13.04.2024 в 15:00</h3>
        <p className='popup__succes-text'>{`Вы успешно зарегистрировались на ${'Data Party'} Подробности уже на вашей почте!`}</p>
        <a className='popup__reminder-text'>{ENTRY_DATA.addReminderText}</a>
        <NotificationForm isNotificationPopup={false} />
      </div>
    </div>
  );
}
