import { Box, FormControlLabel, Checkbox } from '@mui/material';
import { REG_ON_IVENT_DATA } from '../../../../utils/constants';
import { useState } from 'react';
import Input from '../../../../ui/Input/Input';
import { checkboxDefault } from './CheckboxStyles';

export default function CheckboxesGroupJob() {
  const [isWorkingChecked, setIsWorkingChecked] = useState(false);

  const handleShowJobInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsWorkingChecked(e.target.checked);
  };

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        rowGap: '10px',
        marginTop: '8px',
      }}
    >
      {isWorkingChecked ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', rowGap: '10px' }}>
          <FormControlLabel
            checked={isWorkingChecked}
            sx={checkboxDefault}
            control={<Checkbox onChange={handleShowJobInputs} />}
            label={REG_ON_IVENT_DATA.checkboxJobLabels.working}
          />
          {REG_ON_IVENT_DATA.inputJobLabels.map((label) => {
            return <Input label={label} />;
          })}
        </Box>
      ) : (
        <FormControlLabel
          sx={checkboxDefault}
          control={<Checkbox onChange={handleShowJobInputs} />}
          label={REG_ON_IVENT_DATA.checkboxJobLabels.working}
        />
      )}

      <FormControlLabel
        sx={checkboxDefault}
        control={<Checkbox />}
        label={REG_ON_IVENT_DATA.checkboxJobLabels.studying}
      />

      <FormControlLabel
        sx={checkboxDefault}
        control={<Checkbox />}
        label={REG_ON_IVENT_DATA.checkboxJobLabels.jobHunting}
      />
    </Box>
  );
}
