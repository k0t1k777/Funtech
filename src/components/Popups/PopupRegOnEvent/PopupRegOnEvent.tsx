import '../Popups.css';
import { REG_ON_IVENT_DATA } from '../../../utils/constants';
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  Typography,
} from '@mui/material';
import Input from '../../../ui/Input/Input';
import { useState } from 'react';
import CheckboxesGroupDirection from './CheckboxesGroup/CheckboxesGroupDirection';
import CheckboxesGroupFormat from './CheckboxesGroup/CheckboxesGroupFormat';
import CheckboxesGroupJob from './CheckboxesGroup/CheckboxesGroupJob';
import { checkboxDefault } from './CheckboxesGroup/CheckboxStyles';

interface PopupRegOnEventProps {
  handleOverlayClose: () => void;
}

export default function PopupRegOnEvent({
  handleOverlayClose,
}: PopupRegOnEventProps) {
  const [isShowAllClicked, setIsShowAllClicked] = useState(false);
  const handlePopupClick = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  const handleShowAll = () => {
    setIsShowAllClicked(true);
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
            {REG_ON_IVENT_DATA.inputLabels.map((label) => {
              return <Input key={label} label={label} />;
            })}
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
              }}
            >
              {REG_ON_IVENT_DATA.direction}
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
          <CheckboxesGroupDirection isShowAllClicked={isShowAllClicked} />
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
            <Typography sx={{ color: '#FF666F' }}>*</Typography>
          </Typography>
          <CheckboxesGroupFormat />
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
            <Typography sx={{ color: '#FF666F' }}>*</Typography>
          </Typography>
          <CheckboxesGroupJob />
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
            label={REG_ON_IVENT_DATA.legalText}
          />
          <FormControlLabel
            sx={checkboxDefault}
            control={<Checkbox />}
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
