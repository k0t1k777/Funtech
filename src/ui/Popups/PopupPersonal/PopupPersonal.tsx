import '../Popups.css';
import LeftArrow from '../../../assets/left-arrow.svg?react';
import { PERSONAL_DATA } from '../../../utils/constants';
import Input from '../../Input/Input';
import CheckboxesGroup from './CheckboxesGroup/CheckboxesGroup';
import { Box, Button, Typography } from '@mui/material';
import { useEffect, useRef, useState } from 'react';

interface PopupPersonalProps {
  handleOverlayClose: () => void;
  setIsPersonalOpen: (type: boolean) => void;
  setIsProfileOpen: (type: boolean) => void;
}

export default function PopupPersonal({
  handleOverlayClose,
  setIsPersonalOpen,
  setIsProfileOpen,
}: PopupPersonalProps) {
  const modalRef = useRef<HTMLDivElement>(null);
  const [isShowAllClicked, setIsShowAllClicked] = useState(false);

  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  function handleShowAll() {
    setIsShowAllClicked(true);
  }

  function handleClose() {
    setIsPersonalOpen(false);
  }

  function handleCloseAll() {
    setIsPersonalOpen(false);
    setIsProfileOpen(false);
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
      <div className='popup popup_personal' onClick={handlePopupClick}>
        <div className='popup__header'>
          <LeftArrow onClick={handleClose} />
          <h2 className='popup__title popup__title_notification'>
            {PERSONAL_DATA.title}
          </h2>
        </div>
        <Box sx={{ height: '100%', overflow: 'auto' }}>
          <Box
            sx={{
              display: 'flex',
              flexDirection: 'column',
              rowGap: '8px',
              marginTop: '28px',
            }}
          >
            {PERSONAL_DATA.inputLabels.map((label) => {
              return <Input key={label} label={label} />;
            })}
          </Box>
          <Typography
            sx={{
              marginTop: '30px',
              fontSize: '16px',
              fontWeight: '400',
              lineHeight: '20.8px',
            }}
          >
            {PERSONAL_DATA.occupation}
          </Typography>
          <CheckboxesGroup
            isCheckboxesJob={true}
            isShowAllClicked={isShowAllClicked}
          />
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              marginTop: '17px',
            }}
          >
            <Typography
              sx={{
                fontSize: '16px',
                fontWeight: '500',
                lineHeight: '20.8px',
              }}
            >
              {PERSONAL_DATA.direction}
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
              {PERSONAL_DATA.showAll}
            </Button>
          </Box>
          <CheckboxesGroup
            isCheckboxesJob={false}
            isShowAllClicked={isShowAllClicked}
          />
        </Box>
        <Box
          sx={{
            display: 'flex',
            marginTop: '28px',
            justifyContent: 'center',
            columnGap: '20px',
          }}
        >
          <Button
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
            onClick={handleCloseAll}
          >
            {PERSONAL_DATA.submitButton}
          </Button>
          <Button
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
            onClick={handleCloseAll}
          >
            {PERSONAL_DATA.cancelButton}
          </Button>
        </Box>
      </div>
    </div>
  );
}
