import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { FILTER_DATA } from 'src/utils/constants';
import { useState } from 'react';
import { MenuItem } from '@mui/material';

export interface SelectProps {
  setCityValue?: (value: string) => void;
  cityValue?: string;
  cities: any;
}

export default function BasicSelect({
  cities,
  cityValue,
  setCityValue,
}: SelectProps) {
  const [isOpenSelect, setIsOpenSelect] = useState(false);

  const handleChange = (evt: SelectChangeEvent<string>) => {
    const value = evt.target.value;
    if (setCityValue) {
      setCityValue(value);
    }
  };

  const toggleSelect = () => {
    setIsOpenSelect(!isOpenSelect);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl
        fullWidth
        sx={{
          borderRadius: '12px',
          '& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon': {
            color: '#6750A4',
          },
          '& .MuiOutlinedInput-notchedOutline': {
            color: 'red',
          },
          '& .css-zun73v.Mui-checked': {
            color: '#6750A4',
          },
          '& label.Mui-focused': {
            color: '#6750A4',
          },
          '& .MuiOutlinedInput-root': {
            '& fieldset': {
              borderColor: '#CAC4D0',
            },
            '&:hover fieldset': {
              borderColor: '#E8DEF8',
            },
            '&.Mui-focused fieldset': {
              borderColor: '#6750A4',
            },
          },
        }}
      >
        <InputLabel id='demo-simple-select-label'>
          {FILTER_DATA.select}
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={cityValue || ''}
          label='Город'
          onChange={handleChange}
          onClick={toggleSelect}
          open={isOpenSelect}
          onClose={() => setIsOpenSelect(false)}
          sx={{
            borderRadius: '12px',
          }}
        >
          {cities.map((city: string, index: number) => (
            <MenuItem key={index} value={city}>
              {city}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
}
