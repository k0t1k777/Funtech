import './NotificationForm.css';
import { NOTIFICATION_FORM_DATA } from '../../utils/constants';
import SwitchButton from '../../ui/SwitchButton';
import RadioButton from '../../ui/RadioButton';
import { FormControl, RadioGroup } from '@mui/material';

interface NotificationFormProps {
  isNotificationPopup: boolean;
  setIsNotificationOpen?: (type: boolean) => void;
  setIsProfileOpen?: (type: boolean) => void;
  setIsEntryOpen?: (type: boolean) => void;
}

export default function NotificationForm({
  isNotificationPopup,
  setIsProfileOpen,
  setIsNotificationOpen,
  setIsEntryOpen,
}: NotificationFormProps) {
  function handleCloseAll() {
    if (setIsProfileOpen) {
      setIsProfileOpen(false);
    }
    if (setIsNotificationOpen) {
      setIsNotificationOpen(false);
    }
  }

  function handleConfirm() {
    if (setIsEntryOpen) {
      setIsEntryOpen(false);
    }
  }

  return (
    <FormControl sx={{ alignItems: 'center' }}>
      <div
        className={`form__container ${
          isNotificationPopup ? 'form__container_notification' : ''
        }`}
      >
        <div className='form__notification'>
          <label className='form__label'>
            {NOTIFICATION_FORM_DATA.notificationText.email}
            <SwitchButton />
          </label>
          <label className='form__label'>
            {NOTIFICATION_FORM_DATA.notificationText.sms}
            <SwitchButton />
          </label>
          <label className='form__label'>
            {NOTIFICATION_FORM_DATA.notificationText.telegram}
            <SwitchButton />
          </label>
          <label className='form__label'>
            {NOTIFICATION_FORM_DATA.notificationText.call}
            <SwitchButton />
          </label>
        </div>
        <div
          className={`form__time ${
            isNotificationPopup ? 'form__time_notification' : ''
          }`}
        >
          <div
            className={`form__titles ${
              isNotificationPopup ? 'form__titles_notification' : ''
            }`}
          >
            <h4 className='form__time-text'>
              {NOTIFICATION_FORM_DATA.timeText.perDay}
            </h4>
            <h4 className='form__time-text'>
              {NOTIFICATION_FORM_DATA.timeText.perHour}
            </h4>
            <h4 className='form__time-text'>
              {NOTIFICATION_FORM_DATA.timeText.perMinutes}
            </h4>
          </div>
          <div
            className={`form__buttons-radio ${
              isNotificationPopup ? 'form__buttons-radio_notification' : ''
            }`}
          >
            <RadioGroup
              sx={{
                flexDirection: 'row',
                columnGap: `${isNotificationPopup ? '40px' : '50px'}`,
              }}
            >
              <RadioButton value='day' />
              <RadioButton value='hour' />
              <RadioButton value='minutes' />
            </RadioGroup>
            <RadioGroup
              sx={{
                flexDirection: 'row',
                columnGap: `${isNotificationPopup ? '40px' : '50px'}`,
              }}
            >
              <RadioButton value='day' />
              <RadioButton value='hour' />
              <RadioButton value='minutes' />
            </RadioGroup>
            <RadioGroup
              sx={{
                flexDirection: 'row',
                columnGap: `${isNotificationPopup ? '40px' : '50px'}`,
              }}
            >
              <RadioButton value='day' />
              <RadioButton value='hour' />
              <RadioButton value='minutes' />
            </RadioGroup>
            <RadioGroup
              sx={{
                flexDirection: 'row',
                columnGap: `${isNotificationPopup ? '40px' : '50px'}`,
              }}
            >
              <RadioButton value='day' />
              <RadioButton value='hour' />
              <RadioButton value='minutes' />
            </RadioGroup>
          </div>
        </div>
      </div>
      {isNotificationPopup ? (
        <div className='form__buttons'>
          <button
            className='form__button-submit form__button-submit_notification'
            onClick={handleCloseAll}
          >
            {NOTIFICATION_FORM_DATA.submitButton.notification}
          </button>
          <button className='form__button-cancel' onClick={handleCloseAll}>
            {NOTIFICATION_FORM_DATA.cancelButton}
          </button>
        </div>
      ) : (
        <button className='form__button-submit' onClick={handleConfirm}>
          {NOTIFICATION_FORM_DATA.submitButton.entry}
        </button>
      )}
    </FormControl>
  );
}
