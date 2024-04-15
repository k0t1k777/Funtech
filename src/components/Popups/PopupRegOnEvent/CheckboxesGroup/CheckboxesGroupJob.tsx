import { Box, FormControlLabel, Checkbox } from '@mui/material';
import { REG_ON_IVENT_DATA } from '../../../../utils/constants';
import { useState } from 'react';
import { checkboxDefault } from './CheckboxStyles';
import './../../Popups.css';

// import * as yup from 'yup';

// const validationSchema = yup.object().shape({
//   company: yup.string().required('First company is required'),
//   position: yup.string().required('Last position is required'),
//   expYears: yup.string().required('Last expYears is required'),
// });

interface CheckboxesGroupJobProps {
  isWorkingChecked: boolean;
  setIsWorkingChecked: () => void;
  handleSubmit: () => void;
  valuesCompany: string;
  valuesPosition: string;
  valuesExpYears: string;
  setValuesCompany: () => void;
  setValuesPosition: () => void;
  setValuesExpYears: () => void;
  valuesActivity: { student: boolean; hunting: boolean; job: boolean };
  setValuesActivity: React.Dispatch<
    React.SetStateAction<{ student: boolean; hunting: boolean; job: boolean }>
  >;
}

export default function CheckboxesGroupJob({
  isWorkingChecked,
  setIsWorkingChecked,
  valuesActivity,
  valuesCompany,
  valuesPosition,
  valuesExpYears,
  setValuesActivity,
  setValuesCompany,
  setValuesPosition,
  setValuesExpYears,
}: CheckboxesGroupJobProps) {
  const [isInputValid, setIsInputValid] = useState(false);

  const handleChange = (event, setValue) => {
    const value = event.target.value;
    setValue(value);
    setIsInputValid(false);
  };

  const handleShowJobInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsWorkingChecked(e.target.checked);
  };

  const handleChangeJob = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    const { name } = event.currentTarget as HTMLInputElement;
    setValuesActivity((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
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
              type='text'
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
          name='job'
          onChange={handleChangeJob}
          checked={valuesActivity.job || false}
        />
      )}

      <FormControlLabel
        sx={checkboxDefault}
        control={<Checkbox />}
        label={REG_ON_IVENT_DATA.checkboxJobLabels.studying}
        name='student'
        onChange={handleChangeJob}
        checked={valuesActivity.student || false}
      />

      <FormControlLabel
        sx={checkboxDefault}
        control={<Checkbox />}
        label={REG_ON_IVENT_DATA.checkboxJobLabels.jobHunting}
        name='hunting'
        onChange={handleChangeJob}
        checked={valuesActivity.hunting || false}
      />
    </Box>
  );
}
