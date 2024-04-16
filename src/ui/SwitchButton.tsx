import { styled } from '@mui/material/styles';
import { Switch } from '@mui/material';

const SwitchButton = styled(Switch)(() => ({
  width: 44,
  height: 25,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 3,
    '&.Mui-checked': {
      transform: 'translateX(17px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#6750A4',
        opacity: 1,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    width: '20.3px',
    height: '18.75px',
    boxShadow: 'none',
  },
  '& .MuiSwitch-track': {
    borderRadius: 20,
    backgroundColor: '#D5D2D2',
    opacity: 1,
  },
}));

export default SwitchButton;
