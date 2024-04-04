import * as React from 'react';
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';
import { CheckboxData } from './../../../utils/constants'

const checkboxData = [
  {
    name: 'Frontend',
    label: 'Frontend',
    margin: '0 14px 0 0',
  },
  {
    name: 'Backend',
    label: 'Backend',
    margin: '0',
  },
  {
    name: 'ML',
    label: 'ML',
    margin: '0 14px 0 0',
  },
  {
    name: 'QA',
    label: 'QA',
    margin: '0 0 0 0',
  },
  {
    name: 'UX/UI',
    label: 'UX/UI',
    margin: '0 14px 0 0',
  },
  {
    name: 'AI',
    label: 'AI',
    margin: '0 0 0 0',
  },
  {
    name: 'Менеджмент',
    label: 'Менеджмент',
    margin: '0 14px 0 0',
  },
  {
    name: 'Аналитика',
    label: 'Аналитика',
    margin: '0',
  },
];

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
      <FormControl component='fieldset' variant='standard'>
        <Typography
          sx={{
            fontWeight: '500',
            fontSize: '16px',
            lineHeight: '20.8px',
          }}
          gutterBottom
        >
          {CheckboxData.line}
        </Typography>
        <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
          {checkboxData.map((checkbox) => (
            <FormControlLabel
              key={checkbox.name}
              sx={{
                width: '143px',
                height: '32px',
                margin: checkbox.margin,
                '.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root': {
                  color: '#CAC4D0',
                },
                '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate':
                  { color: '#6750A4' },
                '& .css-i4bv87-MuiSvgIcon-root': {
                  width: '18px',
                  height: '18px',
                },
              }}
              control={
                <Checkbox onChange={handleChange} name={checkbox.name} />
              }
              label={checkbox.label}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
