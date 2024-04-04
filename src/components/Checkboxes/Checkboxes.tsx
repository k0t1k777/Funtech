import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function CheckboxesGroup() {
  const [state, setState] = React.useState({
    gilad: true,
    jason: false,
    antoine: false,
  });

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
  };

  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <FormControl
        sx={{
          margin: '28px 0 0 0',
        }}
        component='fieldset'
        variant='standard'
      >
        <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
          <FormControlLabel
            sx={{ width: '147px', margin: '0 28px 0 0' }}
            control={<Checkbox onChange={handleChange} name='Online' />}
            label='Online'
          />
          <FormControlLabel
            sx={{ width: '107px', margin: '0' }}
            control={<Checkbox onChange={handleChange} name='Offline' />}
            label='Offline'
          />
          <FormControlLabel
            sx={{ width: '147px', margin: '0 28px 0 0' }}
            control={<Checkbox onChange={handleChange} name='MyEvent' />}
            label='Мои события'
          />
        </FormGroup>
      </FormControl>
    </Box>
  );
}
