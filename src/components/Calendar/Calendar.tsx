import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
dayjs.locale('ru');
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
import { LicenseInfo } from '@mui/x-license';

LicenseInfo.setLicenseKey(
  'e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y'
);

export default function Calendar() {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <StaticDateRangePicker
        sx={{
          '& .MuiPickersToolbar-root': {
            display: 'none',
          },
          '& .MuiDialogActions-root': {
            display: 'none',
          },
          '& .css-zlm3dp-MuiPickersLayout-root': {
            height: '100%',
          },
            '& .MuiDateRangeCalendar-root': {
            borderRadius: '12px',
            border: '1px solid #CAC4D0',
            height: '312px',
            width: '300px',
          },
            '& .css-1juxbee-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected':
            {
              backgroundColor: '#6750A4',
            },
          '& .css-1ny3jyh-MuiDateRangePickerDay-root': {
            backgroundColor: '#E8DEF8',
          },
          '& .css-1h9r93t-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day:not(.Mui-selected)':
            {
              border: '1px solid #6750A4',
            },
            '& .css-grqin-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected': {
              backgroundColor: '#6750A4',
            },
            '& .css-tbuks1-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected:hover': {
              backgroundColor: '#6750A4',
            },
            '& .css-1juxbee-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day:focus.Mui-selected': {
              backgroundColor: '#6750A4',
            },
            '& .css-tbuks1-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected': {
              backgroundColor: '#6750A4',
            },
            '& .css-grqin-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected:focus': {
              backgroundColor: '#6750A4',
            },
        }}
      />
    </LocalizationProvider>
  );
}
