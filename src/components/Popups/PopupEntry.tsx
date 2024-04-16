import './Popups.css';
import { ENTRY_DATA } from '../../utils/constants';
import NotificationForm from '../NotificationForm/NotificationForm';
import { useEffect, useRef } from 'react';

interface PopupEntryProps {
  handleOverlayClose: () => void;
  setIsEntryOpen: (value: boolean) => void;
}

export default function PopupEntry({
  handleOverlayClose,
  setIsEntryOpen,
}: PopupEntryProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
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
    <div
      className='popup__overlay popup__overlay_centered'
      onClick={handleOverlayClose}
    >
      <div
        className='popup popup_entry'
        onClick={handlePopupClick}
        ref={modalRef}
      >
        <h2 className='popup__title'>{ENTRY_DATA.title}</h2>
        <h3 className='popup__date'>13.04.2024 в 15:00</h3>
        <p className='popup__succes-text'>{ENTRY_DATA.done} {'Data Party'} {ENTRY_DATA.continue}</p>
        <a className='popup__reminder-text'>{ENTRY_DATA.addReminderText}</a>
        <NotificationForm
          isNotificationPopup={false}
          setIsEntryOpen={setIsEntryOpen}
        />
      </div>
    </div>
  );
}
