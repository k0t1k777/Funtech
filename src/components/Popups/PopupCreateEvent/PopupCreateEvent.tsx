import '../Popups.css';
import CloseButton from '../../../assets/close-icon.svg?react';
import {
  Box,
  Button,
  Link,
  MenuItem,
  Select,
  TextField,
  Typography,
} from '@mui/material';
import { CREATE_EVENT_DATA, POPUP_DATA } from '../../../utils/constants';
import { useEffect, useRef, useState } from 'react';
import DefaultEventImg from '../../../assets/images/defaultEventImg.png';
import {
  defaultInputStyles,
  descriptionInputStyles,
  fillButtonStyles,
  menuItemStyles,
  placeInputStyles,
  submitButtonStyles,
} from './PopupCreateEventStyles';
import SwitchButton from '../../../ui/SwitchButton';
import CloudIcon from '../../../assets/cloudIcon.svg?react';
import { SelectChangeEvent } from '@mui/material/Select';

interface IPopupCreateEventProps {
  handleOverlayClose: () => void;
  setIsCreateEventOpen: (type: boolean) => void;
  setIsProfileOpen: (type: boolean) => void;
}

export default function PopupCreateEvent({
  handleOverlayClose,
  setIsCreateEventOpen,
  setIsProfileOpen,
}: IPopupCreateEventProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [selectType, setSelectType] = useState('eventType');
  const [selectDirection, setSelectDirection] = useState('eventDirection');
  const [selectFormat, setSelectFormat] = useState('eventFormat');
  const [selectCity, setSelectCity] = useState('city');
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleSelectType = (e: SelectChangeEvent<string>) => {
    setSelectType(e.target.value);
  };

  const handleSelectDirection = (e: SelectChangeEvent<string>) => {
    setSelectDirection(e.target.value);
  };

  const handleSelectFormat = (e: SelectChangeEvent<string>) => {
    setSelectFormat(e.target.value);
  };

  const handleSelectCity = (e: SelectChangeEvent<string>) => {
    setSelectCity(e.target.value);
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

  const handleCloseAll = () => {
    setIsCreateEventOpen(false);
    setIsProfileOpen(false);
  };

  return (
    <div
      className='popup__overlay popup__overlay_centered'
      onClick={handleOverlayClose}
    >
      <div
        className='popup popup_create-event'
        onClick={handlePopupClick}
        ref={modalRef}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            position: 'relative',
          }}
        >
          <CloseButton
            className='popup__button-close'
            onClick={handleOverlayClose}
          />
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: '200px 396px',
              gridTemplateRows: '292px',
              columnGap: '40px',
            }}
          >
            <Box
              sx={{ display: 'flex', flexDirection: 'column', rowGap: '16px' }}
            >
              <TextField
                placeholder={CREATE_EVENT_DATA.eventTopic}
                sx={defaultInputStyles}
              />
              <TextField
                placeholder={CREATE_EVENT_DATA.eventDescription}
                sx={descriptionInputStyles}
                multiline
                rows={'3'}
              />
              <Select
                value={selectType}
                onChange={handleSelectType}
                sx={{
                  color: `${
                    selectType === 'eventType' ? '#2B2D33B2' : '#2B2D33'
                  }`,
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '18.2px',
                  borderRadius: '8px',
                  border: '1px solid #CAC4D0',
                  '& .MuiSelect-select': {
                    padding: '8px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                }}
              >
                <MenuItem disabled value='eventType' sx={menuItemStyles}>
                  {CREATE_EVENT_DATA.eventTypeText}
                </MenuItem>
                {CREATE_EVENT_DATA.eventTypes.map((types) => {
                  return (
                    <MenuItem key={types} value={types} sx={menuItemStyles}>
                      {types}
                    </MenuItem>
                  );
                })}
              </Select>
              <Select
                value={selectDirection}
                onChange={handleSelectDirection}
                sx={{
                  color: `${
                    selectDirection === 'eventDirection'
                      ? '#2B2D33B2'
                      : '#2B2D33'
                  }`,
                  fontSize: '14px',
                  fontWeight: '400',
                  lineHeight: '18.2px',
                  borderRadius: '8px',
                  border: '1px solid #CAC4D0',
                  '& .MuiSelect-select': {
                    padding: '8px',
                  },
                  '& .MuiOutlinedInput-notchedOutline': {
                    border: 'none',
                  },
                }}
              >
                <MenuItem disabled value='eventDirection' sx={menuItemStyles}>
                  {CREATE_EVENT_DATA.eventDirectionText}
                </MenuItem>
                {CREATE_EVENT_DATA.eventDirections.map((direction) => {
                  return (
                    <MenuItem
                      key={direction}
                      value={direction}
                      sx={menuItemStyles}
                    >
                      {direction}
                    </MenuItem>
                  );
                })}
              </Select>
              <Box sx={{ display: 'flex', columnGap: '12px' }}>
                <TextField
                  placeholder={CREATE_EVENT_DATA.date}
                  sx={defaultInputStyles}
                />
                <TextField
                  placeholder={CREATE_EVENT_DATA.time}
                  sx={defaultInputStyles}
                />
              </Box>
            </Box>
            <Box>
              <img
                className='popup__img popup__img_create-event'
                src={DefaultEventImg}
              />
            </Box>
          </Box>
          <Box sx={{ marginTop: '16px' }}>
            <Select
              value={selectFormat}
              onChange={handleSelectFormat}
              sx={{
                width: '200px',
                color: `${
                  selectFormat === 'eventFormat' ? '#2B2D33B2' : '#2B2D33'
                }`,
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '18.2px',
                borderRadius: '8px',
                border: '1px solid #CAC4D0',
                '& .MuiSelect-select': {
                  padding: '8px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
            >
              <MenuItem disabled value='eventFormat' sx={menuItemStyles}>
                {CREATE_EVENT_DATA.eventFormatText}
              </MenuItem>
              {CREATE_EVENT_DATA.eventFormats.map((format) => {
                return (
                  <MenuItem key={format} value={format} sx={menuItemStyles}>
                    {format}
                  </MenuItem>
                );
              })}
            </Select>
          </Box>
          <Box
            sx={{
              display: 'grid',
              columnGap: '20px',
              marginTop: '25px',
              gridTemplateColumns: '309px 309px',
            }}
          >
            <TextField
              placeholder={CREATE_EVENT_DATA.seatsOffline}
              sx={defaultInputStyles}
            />
            <TextField
              placeholder={CREATE_EVENT_DATA.seatsOnline}
              sx={defaultInputStyles}
            />
          </Box>
          <Box
            sx={{
              display: 'grid',
              columnGap: '20px',
              marginTop: '16px',
              gridTemplateColumns: '309px 309px',
            }}
          >
            <Select
              value={selectCity}
              onChange={handleSelectCity}
              sx={{
                color: `${selectCity === 'city' ? '#2B2D33B2' : '#2B2D33'}`,
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '18.2px',
                borderRadius: '8px',
                border: '1px solid #CAC4D0',
                '& .MuiSelect-select': {
                  padding: '8px',
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  border: 'none',
                },
              }}
            >
              <MenuItem disabled value='city' sx={menuItemStyles}>
                {CREATE_EVENT_DATA.cityText}
              </MenuItem>
              {CREATE_EVENT_DATA.cities.map((city) => {
                return (
                  <MenuItem key={city} value={city} sx={menuItemStyles}>
                    {city}
                  </MenuItem>
                );
              })}
            </Select>
            <TextField
              placeholder={CREATE_EVENT_DATA.linkOnTranslation}
              sx={defaultInputStyles}
            />
          </Box>
          <TextField
            placeholder={CREATE_EVENT_DATA.place}
            sx={placeInputStyles}
            fullWidth
          />
          <Box sx={{ display: 'flex', columnGap: '20px', marginTop: '18px' }}>
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '400',
                lineHeight: '20.8px',
                marginLeft: '8px',
              }}
            >
              {CREATE_EVENT_DATA.promote}
            </Typography>
            <SwitchButton />
          </Box>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              columnGap: '20px',
              marginTop: '22px',
            }}
          >
            <Typography
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '18.2px',
                marginLeft: '8px',
              }}
            >
              {CREATE_EVENT_DATA.fileWithAdditional}
            </Typography>
            <Link
              sx={{
                fontSize: '14px',
                fontWeight: '400',
                lineHeight: '18.2px',
                textDecoration: 'none',
                color: '#2B2D33',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                columnGap: '5px',
              }}
            >
              <CloudIcon />
              {POPUP_DATA.download}
            </Link>
          </Box>
          <Box
            sx={{
              display: 'flex',
              marginTop: '42px',
              justifyContent: 'center',
              columnGap: '20px',
            }}
          >
            <Button sx={submitButtonStyles} onClick={handleCloseAll}>
              {CREATE_EVENT_DATA.submitButton}
            </Button>
            <Button sx={fillButtonStyles} onClick={handleCloseAll}>
              {CREATE_EVENT_DATA.fillButton}
            </Button>
          </Box>
        </Box>
      </div>
    </div>
  );
}
