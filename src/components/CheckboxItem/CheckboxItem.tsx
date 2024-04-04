import * as React from 'react';
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
          <FormControlLabel
            sx={{ width: '147px', margin: '0 28px 0 0' }}
            control={<Checkbox onChange={handleChange} name='Online' />}
            label='Online'
          /> 
  );
}
