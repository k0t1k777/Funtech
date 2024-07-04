import { Checkbox, FormControlLabel, Box } from '@mui/material';
import { REG_ON_IVENT_DATA } from '../../../../utils/constants';
import { checkboxDefault, checkboxOff } from './CheckboxStyles';

export default function CheckboxesGroupFormat() {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        marginTop: '8px',
        rowGap: '8px',
      }}
    >
      <FormControlLabel
        control={<Checkbox />}
        sx={checkboxDefault}
        name='online'
        label={REG_ON_IVENT_DATA.checkboxformatLabels.online}
      />
      <FormControlLabel
        control={<Checkbox />}
        sx={checkboxOff}
        name='offline'
        label={REG_ON_IVENT_DATA.checkboxformatLabels.offline.notAvailable}
      />
    </Box>
  );
}
