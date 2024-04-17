import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { CHECKBOX_TIME_DATA } from './../../../utils/constants';

interface CheckboxesGroupProps {
  loggedIn: boolean;
  superUser: boolean;
}

export default function CheckboxesGroup({ loggedIn, superUser }: CheckboxesGroupProps) {
  return (
    <Box sx={{ display: 'flex', width: '100%' }}>
      <FormControl component='fieldset' variant='standard'>
        <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
          {CHECKBOX_TIME_DATA.map((checkbox) => (
            (checkbox.name !== 'MyEvent' || loggedIn || superUser) && (
            <FormControlLabel
              key={checkbox.name}
              sx={{
                width: '143px',
                height: '32px',
                margin: checkbox.margin,
                '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate':
                  { color: '#6750A4' },
                '.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root': {
                  color: '#CAC4D0',
                },
                '& .css-i4bv87-MuiSvgIcon-root': {
                  width: '18px',
                  height: '18px',
                },
              }}
              control={<Checkbox name={checkbox.name} />}
              label={checkbox.label}
            />
            )
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
