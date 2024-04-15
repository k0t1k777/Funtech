import { Checkbox, FormControlLabel, Box } from '@mui/material';
import { REG_ON_IVENT_DATA } from '../../../../utils/constants';
import { checkboxDefault, checkboxOff } from './CheckboxStyles';

interface CheckboxesGroupFormatProps {
  valuesFormat: { online: boolean; offline: boolean };
  setValuesFormat: React.Dispatch<
    React.SetStateAction<{ online: boolean; offline: boolean }>
  >;
}

export default function CheckboxesGroupFormat({
  valuesFormat,
  setValuesFormat,
}: CheckboxesGroupFormatProps) {
  const handleChangeFormat = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    const { name } = event.currentTarget as HTMLInputElement;
    setValuesFormat((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

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
        onChange={handleChangeFormat}
        checked={valuesFormat.online  || false}
      />
      <FormControlLabel
        control={<Checkbox />}
        sx={checkboxOff}
        name='offline'
        onChange={handleChangeFormat}
        checked={valuesFormat.offline  || false}
        label={REG_ON_IVENT_DATA.checkboxformatLabels.offline.notAvailable}
      />
    </Box>
  );
}
