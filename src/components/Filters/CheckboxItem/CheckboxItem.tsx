import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { Typography } from '@mui/material';

interface CheckboxItemProps {
  value: string[];
  setValue: (type: string[]) => void;
  option: string[];
  title?: string;
}

export default function CheckboxItem({
  value,
  setValue,
  option,
  title,
}: CheckboxItemProps) {
  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    let updatedValues = [...value];
    if (checked) {
      updatedValues = [...updatedValues, name];
    } else {
      updatedValues = updatedValues.filter((item: string) => item !== name);
    }
    setValue(updatedValues);
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
          {title}
        </Typography>
        <FormGroup sx={{ display: 'flex', flexDirection: 'row' }}>
          {option.map((checkbox: string, index: number) => (
            <FormControlLabel
              key={index}
              sx={{
                width: '143px',
                height: '32px',
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
              control={
                <Checkbox
                  checked={value.includes(checkbox)}
                  onChange={handleCheckboxChange}
                  name={checkbox}
                />
              }
              label={checkbox}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
}
