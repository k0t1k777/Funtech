import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';

export default function BasicSelect() {
  const [city, setCity] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setCity(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth           sx={{
            borderRadius: '12px',
            '& .css-bpeome-MuiSvgIcon-root-MuiSelect-icon': {
              color: '#6750A4', },
              '& .MuiOutlinedInput-notchedOutline': {
                color: 'red',

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
          }}>
        <InputLabel
          id='demo-simple-select-label'
        >
          Город
        </InputLabel>
        <Select
          labelId='demo-simple-select-label'
          id='demo-simple-select'
          value={city}
          label='Город'
          onChange={handleChange}
          sx={{
            borderRadius: '12px',
          }}
        >
          <MenuItem value={10}>Москва</MenuItem>
          <MenuItem value={20}>Питер</MenuItem>
          <MenuItem value={30}>Казань</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
