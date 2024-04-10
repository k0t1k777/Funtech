import './Popups.css';

interface PopupCreateEventProps {
  handleOverlayClose: () => void;
}

export default function PopupCreateEvent({
  handleOverlayClose,
}: PopupCreateEventProps) {
  return (
    <div className='popup__overlay popup__overlay_centered' onClick={handleOverlayClose}>
      <div className='popup popup_create-event'>
      </div>
    </div>
  );
}
