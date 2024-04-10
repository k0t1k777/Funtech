import { Radio } from '@mui/material';
import { styled } from '@mui/material/styles';

interface RadioButtonProps {
  value: string;
}

const RadioIcon = styled('span')(() => ({
  borderRadius: '50%',
  width: 30,
  height: 30,
  backgroundColor: 'rgba(213, 210, 210, 1)',
  '&::before': {
    borderRadius: '50%',
    display: 'block',
    width: 24,
    height: 24,
    backgroundColor: '#fff',
    content: '""',
    margin: '3px 0 0 3px',
  },
}));

const CheckedRadioIcon = styled(RadioIcon)(() => ({
  backgroundColor: 'rgba(103, 80, 164, 1)',
  '&::before': {
    borderRadius: '50%',
    display: 'block',
    width: 16,
    height: 16,
    backgroundColor: '#fff',
    content: '""',
    margin: '7px 0 0 7px',
  },
}));

function RadioButton({ value }: RadioButtonProps) {
  return (
    <Radio
      icon={<RadioIcon />}
      checkedIcon={<CheckedRadioIcon />}
      value={value}
      sx={{ padding: 0 }}
    />
  );
}

export default RadioButton;
