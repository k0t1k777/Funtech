  import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
  import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
  import { StaticDateRangePicker } from '@mui/x-date-pickers-pro/StaticDateRangePicker';
  import { LicenseInfo } from '@mui/x-license';
  import { DateRange } from '@mui/x-date-pickers-pro/models';
  import dayjs from 'dayjs';
  import 'dayjs/locale/ru';
  dayjs.locale('ru');

  LicenseInfo.setLicenseKey(
    'e0d9bb8070ce0054c9d9ecb6e82cb58fTz0wLEU9MzI0NzIxNDQwMDAwMDAsUz1wcmVtaXVtLExNPXBlcnBldHVhbCxLVj0y'
  );

  interface CalendarProps {
    value: [dayjs.Dayjs, dayjs.Dayjs];
    setValue: React.Dispatch<React.SetStateAction<[dayjs.Dayjs, dayjs.Dayjs]>>;
    setShowDateBefore: React.Dispatch<React.SetStateAction<string | null>>;
    setShowDateAfter: React.Dispatch<React.SetStateAction<string | null>>;
  }

  export default function Calendar({
    value,
    setValue,
    setShowDateBefore,
    setShowDateAfter,
  }: CalendarProps) {
    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StaticDateRangePicker
          value={value}
          onChange={(newValue: DateRange<dayjs.Dayjs>) => {
            if (newValue[0] && newValue[1]) {
              setValue([newValue[0], newValue[1]]);
              setShowDateBefore(dayjs(newValue[0]).format('YYYY-MM-DD'));
              setShowDateAfter(dayjs(newValue[1]).format('YYYY-MM-DD'));
            }
          }}
          sx={{
            '& .MuiPickersToolbar-root': {
              display: 'none',
            },
            '& .MuiDialogActions-root': {
              display: 'none',
            },
            '& .css-m2eom3-MuiDayCalendar-slideTransition': {
              height: '100%',
            },
            '& .MuiDateRangeCalendar-root': {
              borderRadius: '12px',
              border: '1px solid #CAC4D0',
              width: '300px',
            },
            '& .css-xlhjvr.Mui-selected': {
              backgroundColor: '#6750A4',
            },
            '& .css-xlhjvr.Mui-selected:focus': {
              backgroundColor: '#6750A4',
            },
            '& .css-6u8l34.Mui-selected': {
              backgroundColor: '#6750A4',
            },
            '& .css-6u8l34:focus .Mui-selected': {
              backgroundColor: '#6750A4',
            },
            '& .css-6u8l34.Mui-selected:hover': {
              backgroundColor: '#6750A4',
            },
            '& .css-1nte4ka.Mui-selected': {
              backgroundColor: '#6750A4',
            },
            '& .css-1nte4ka.Mui-selected-selected': {
              backgroundColor: '#6750A4',
            },
            '& .css-14oncwe': {
              backgroundColor: '#E8DEF8',
            },
            '& .css-1uqqj9m': {
              backgroundColor: '#E8DEF8',
            },
            '& .css-1qe0bmr': {
              backgroundColor: '#E8DEF8',
            },
            '&  .css-1nte4ka:focus.Mui-selected:focus': {
              backgroundColor: '#6750A4',
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
            '& .css-grqin-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected':
              {
                backgroundColor: '#6750A4',
              },
            '& .css-tbuks1-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected:hover':
              {
                backgroundColor: '#6750A4',
              },
            '& .css-1juxbee-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day:focus.Mui-selected':
              {
                backgroundColor: '#6750A4',
              },
            '& .css-tbuks1-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected':
              {
                backgroundColor: '#6750A4',
              },
            '& .css-grqin-MuiButtonBase-root-MuiPickersDay-root-MuiDateRangePickerDay-day.Mui-selected:focus':
              {
                backgroundColor: '#6750A4',
              },
            '& .css-f8wito-MuiDateRangePickerDay-root': {
              backgroundColor: '#E8DEF8',
            },
            '& .css-1jt0kfk-MuiDateRangePickerDay-root': {
              backgroundColor: '#E8DEF8',
            },
          }}
        />
      </LocalizationProvider>
    );
  }
