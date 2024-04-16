import { Box, FormControlLabel, Checkbox } from '@mui/material';
import { REG_ON_IVENT_DATA } from '../../../../utils/constants';
import { useState } from 'react';
import { checkboxDefault } from './CheckboxStyles';
import './../../Popups.css';

interface CheckboxesGroupJobProps {
  isWorkingChecked: boolean;
  setIsWorkingChecked: (checked: boolean) => void;
  valuesCompany: string;
  valuesPosition: string;
  valuesExpYears: string | number | readonly string[] | undefined;
  setValuesCompany: (value: string) => void;
  setValuesPosition: (value: string) => void;
  setValuesExpYears: (
    value: string | number | readonly string[] | undefined
  ) => void;
}

export default function CheckboxesGroupJob({
  isWorkingChecked,
  setIsWorkingChecked,
  valuesCompany,
  valuesPosition,
  valuesExpYears,
  setValuesCompany,
  setValuesPosition,
  setValuesExpYears,
}: CheckboxesGroupJobProps) {
  const [isInputValid, setIsInputValid] = useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    setValue: (value: string) => void
  ) => {
    const value = event.target.value;
    setValue(value);
    setIsInputValid(false);
  };

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
          <label className={`label ${isInputValid ? 'label__error' : ''}`}>
            {REG_ON_IVENT_DATA.inputJobLabels.company}
            <input
              className='label__input'
              type='text'
              value={valuesCompany}
              onChange={(e) => handleChange(e, setValuesCompany)}
            />
          </label>
          <label className={`label ${isInputValid ? 'label__error' : ''}`}>
            {REG_ON_IVENT_DATA.inputJobLabels.position}
            <input
              className='label__input'
              type='text'
              value={valuesPosition}
              onChange={(e) => handleChange(e, setValuesPosition)}
            />
          </label>
          <label className={`label ${isInputValid ? 'label__error' : ''}`}>
            {REG_ON_IVENT_DATA.inputJobLabels.exp}
            <input
              className='label__input'
              type='number'
              value={valuesExpYears}
              onChange={(e) => handleChange(e, setValuesExpYears)}
            />
          </label>
        </Box>
      ) : (
        <FormControlLabel
          sx={checkboxDefault}
          control={<Checkbox onChange={handleShowJobInputs} />}
          label={REG_ON_IVENT_DATA.checkboxJobLabels.working}
          name='seeking'
        />
      )}

      <FormControlLabel
        sx={checkboxDefault}
        control={<Checkbox />}
        label={REG_ON_IVENT_DATA.checkboxJobLabels.studying}
        name='studying'
      />

      <FormControlLabel
        sx={checkboxDefault}
        control={<Checkbox />}
        label={REG_ON_IVENT_DATA.checkboxJobLabels.jobHunting}
        name='working'
      />
    </Box>
  );
}
