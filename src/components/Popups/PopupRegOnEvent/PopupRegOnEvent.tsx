import '../Popups.css';
import { REG_ON_IVENT_DATA, INPUT_DATA } from '../../../utils/constants';
import * as yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import { useState } from 'react';
import CheckboxesGroupDirection from './CheckboxesGroup/CheckboxesGroupDirection';
import CheckboxesGroupFormat from './CheckboxesGroup/CheckboxesGroupFormat';
import CheckboxesGroupJob from './CheckboxesGroup/CheckboxesGroupJob';
import { checkboxDefault } from './CheckboxesGroup/CheckboxStyles';


const validationSchema = yup.object().shape({
  firstName: yup.string().required('First name is required'),
  lastName: yup.string().required('Last name is required'),
  email: yup.string().required('Last email is required'),
  phone: yup.string().required('Last phone is required'),
  company: yup.string().required('First company is required'),
  position: yup.string().required('Last position is required'),
  expYears: yup.string().required('Last expYears is required'),
});

export interface PopupRegOnEventProps {
  handleOverlayClose: () => void;
  setIsRegOnIventOpen: (value: boolean) => void;
  postEvent: () => void;
  valuesFormat: string;
  valuesFirstName: string;
  valuesLastName: string;
  valuesEmail: string;
  valuesPhone: number | undefined;
  valuesTelegram: string;
  valuesBirthDate: string;
  valuesCity: string;
  valuesActivity: string;
  valuesCompany: string;
  valuesPosition: string;
  valuesExpYears: number | undefined;
  valuesSpec: string;
  setValuesFormat: () => void;
  setValuesFirstName: () => void;
  setValuesLastName: () => void;
  setValuesEmail: () => void;
  setValuesPhone: () => void;
  setValuesTelegram: () => void;
  setValuesBirthDate: () => void;
  setValuesCity: () => void;
  setValuesActivity: () => void;
  setValuesCompany: () => void;
  setValuesPosition: () => void;
  setValuesExpYears: () => void;
  setValuesSpec: () => void;
  specializations: Spec[];
}

export interface Spec {
  specializations: Spec[]
}

export default function PopupRegOnEvent({
  handleOverlayClose,
  setIsRegOnIventOpen,
  postEvent,
  specializations,
  valuesFormat,
  valuesFirstName,
  valuesLastName,
  valuesEmail,
  valuesPhone,
  valuesTelegram,
  valuesBirthDate,
  valuesCity,
  valuesActivity,
  valuesCompany,
  valuesPosition,
  valuesExpYears,
  valuesSpec,
  setValuesFormat,
  setValuesFirstName,
  setValuesLastName,
  setValuesEmail,
  setValuesPhone,
  setValuesTelegram,
  setValuesBirthDate,
  setValuesCity,
  setValuesSpec,
  setValuesActivity,
  setValuesCompany,
  setValuesPosition,
  setValuesExpYears,
}: PopupRegOnEventProps) {
  const [isInputValid, setIsInputValid] = useState(false);
  console.log('isInputValid: ', isInputValid);
  const [isShowAllClicked, setIsShowAllClicked] = useState(false);
  const [isWorkingChecked, setIsWorkingChecked] = useState(false);

  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleClose = () => {
    setIsRegOnIventOpen(false);
  };

  const handleShowAll = () => {
    setIsShowAllClicked(true);
  };

  const handleSubmit = () => {
    if (isWorkingChecked) {
      validationSchema
        .validate(
          {
            firstName: valuesFirstName,
            lastName: valuesLastName,
            email: valuesEmail,
            phone: valuesPhone,
            company: valuesCompany,
            position: valuesPosition,
            expYears: valuesExpYears,
          },
          { abortEarly: false }
        )
        .then(() => {
          setIsInputValid(false);
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      validationSchema
        .validate(
          {
            firstName: valuesFirstName,
            lastName: valuesLastName,
            email: valuesEmail,
            phone: valuesPhone,
          },
          { abortEarly: false }
        )
        .then(() => {
          setIsInputValid(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    postEvent();
  };

  const handleChange = (event, setValue) => {
    const value = event.target.value;
    setValue(value);
    setIsInputValid(false);
  };

  return (
    <div
      className='popup__overlay popup__overlay_centered'
      onClick={handleOverlayClose}
    >
      <div className='popup popup_reg-on-ivent' onClick={handlePopupClick}>
        <Box
          sx={{ display: 'flex', flexDirection: 'column', textAlign: 'center' }}
        >
          <Typography
            sx={{
              fontSize: '40px',
              fontWeight: '700',
              lineHeight: '52px',
            }}
          >{`${REG_ON_IVENT_DATA.title} Data Party`}</Typography>
          <Typography
            sx={{
              fontSize: '40px',
              fontWeight: '700',
              lineHeight: '52px',
            }}
          >
            13 апреля 2024 в 15:00
          </Typography>
        </Box>
        <Box sx={{ height: '100%', overflow: 'auto' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '8px',
              marginTop: '28px',
            }}
          >
            <label className={`label ${isInputValid ? 'label__error' : ''}`}>
              {INPUT_DATA.name}
              <input
                className='label__input'
                type='text'
                value={valuesFirstName}
                onChange={(e) => handleChange(e, setValuesFirstName)}
              />
            </label>
            <label className={`label ${isInputValid ? 'label__error' : ''}`}>
              {INPUT_DATA.surname}
              <input
                className='label__input'
                type='text'
                value={valuesLastName}
                onChange={(e) => handleChange(e, setValuesLastName)}
              />
            </label>
            <label className='label'>
              {INPUT_DATA.date}
              <input
                className='label__input'
                type='date'
                value={valuesBirthDate}
                onChange={(e) => handleChange(e, setValuesBirthDate)}
              />
            </label>
            <label className={`label ${isInputValid ? 'label__error' : ''}`}>
              {INPUT_DATA.email}
              <input
                className='label__input'
                type='mail'
                value={valuesEmail}
                onChange={(e) => handleChange(e, setValuesEmail)}
              />
            </label>
            <label className={`label ${isInputValid ? 'label__error' : ''}`}>
              {INPUT_DATA.phone}
              <input
                className='label__input'
                type='number'
                value={valuesPhone}
                pattern='^(\+7|7|8)\d{10}$'
                onChange={(e) => handleChange(e, setValuesPhone)}
              />
            </label>
            <label className='label'>
              {INPUT_DATA.telegram}
              <input
                className='label__input'
                type='text'
                value={valuesTelegram}
                pattern='^@[a-zA-Z0-9_]{5,32}$'
                onChange={(e) => handleChange(e, setValuesTelegram)}
              />
            </label>
            <label className='label'>
              {INPUT_DATA.city}
              <input
                className='label__input  label__error'
                type='text'
                value={valuesCity}
                onChange={(e) => handleChange(e, setValuesCity)}
              />
            </label>
          </Box>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '12px',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '20.8px',
                display: 'flex',
              }}
            >
              {REG_ON_IVENT_DATA.direction}
              <Typography component='span' sx={{ color: '#FF666F' }}>
                *
              </Typography>
            </Typography>
            <Button
              disableRipple={true}
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '18.2px',
                textTransform: 'none',
                padding: '0',
                color: '#7E7E7EB2',
                textDecoration: 'underline',
                ':hover': {
                  textDecoration: 'underline',
                },
              }}
              onClick={handleShowAll}
            >
              {REG_ON_IVENT_DATA.showAll}
            </Button>
          </Box>
          <CheckboxesGroupDirection
            specializations={specializations}
            isShowAllClicked={isShowAllClicked}
            valuesSpec={valuesSpec}
            setValuesSpec={setValuesSpec}
          />
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '20.8px',
              marginTop: '13px',
              display: 'flex',
            }}
          >
            {REG_ON_IVENT_DATA.format}
            <Typography component='span' sx={{ color: '#FF666F' }}>
              *
            </Typography>
          </Typography>
          <CheckboxesGroupFormat
            valuesFormat={valuesFormat}
            setValuesFormat={setValuesFormat}
          />
          <Typography
            sx={{
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '20.8px',
              marginTop: '14px',
              display: 'flex',
            }}
          >
            {REG_ON_IVENT_DATA.occupation}
            <Typography component='span' sx={{ color: '#FF666F' }}>
              *
            </Typography>
          </Typography>
          <CheckboxesGroupJob
            isWorkingChecked={isWorkingChecked}
            setIsWorkingChecked={setIsWorkingChecked}
            valuesActivity={valuesActivity}
            valuesCompany={valuesCompany}
            valuesPosition={valuesPosition}
            valuesExpYears={valuesExpYears}
            setValuesActivity={setValuesActivity}
            setValuesPosition={setValuesPosition}
            setValuesCompany={setValuesCompany}
            setValuesExpYears={setValuesExpYears}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            marginTop: '24px',
            rowGap: '8px',
          }}
        >
          <FormControlLabel
            sx={checkboxDefault}
            control={<Checkbox />}
            required
            label={REG_ON_IVENT_DATA.legalText}
          />
          <FormControlLabel
            sx={checkboxDefault}
            control={<Checkbox />}
            required
            label={REG_ON_IVENT_DATA.saveData}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginTop: '28px',
            justifyContent: 'center',
            columnGap: '16px',
          }}
        >
          <Button
            disableRipple={true}
            onClick={handleSubmit}
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '18.2px',
              textTransform: 'none',
              padding: '8.5px 0',
              color: 'white',
              backgroundColor: '#6750A4',
              borderRadius: '16px',
              width: '118px',
              ':hover': {
                color: 'white',
                backgroundColor: '#6750A4',
              },
            }}
          >
            {REG_ON_IVENT_DATA.submitButton}
          </Button>
          <Button
            disableRipple={true}
            onClick={handleClose}
            sx={{
              fontSize: '14px',
              fontWeight: '400',
              lineHeight: '18.2px',
              textTransform: 'none',
              padding: '8.5px 0',
              color: '#2B2D33',
              backgroundColor: 'white',
              border: '1px solid #6750A4',
              borderRadius: '16px',
              width: '118px',
              ':hover': {
                color: '#2B2D33',
                backgroundColor: 'white',
              },
            }}
          >
            {REG_ON_IVENT_DATA.cancelButton}
          </Button>
        </Box>
      </div>
    </div>
  );
}
