import { Box, FormControlLabel, Checkbox } from '@mui/material';
import { PERSONAL_DATA } from 'src/utils/constants';
import { useState } from 'react';
import Input from 'src/ui/Input/Input';

const checkboxStyles = {
  width: '164px',
  height: '24px',
  margin: '0',
  '.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root': {
    color: '#CAC4D0',
  },
  '& .MuiButtonBase-root': {
    padding: '0',
  },
  '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate':
    { color: '#6750A4' },
  '& .MuiSvgIcon-root': {
    width: '24px',
    height: '24px',
  },
  '& .css-ahj2mt-MuiTypography-root': {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18.2px',
  },
};

const checkboxJobStyles = {
  width: '164px',
  height: '30px',
  margin: '0',
  columnGap: '3px',
  '.css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root': {
    color: '#CAC4D0',
  },
  '& .MuiButtonBase-root': {
    padding: '0',
  },
  '& .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.Mui-checked, .css-12wnr2w-MuiButtonBase-root-MuiCheckbox-root.MuiCheckbox-indeterminate':
    { color: '#6750A4' },
  '& .MuiSvgIcon-root': {
    width: '24px',
    height: '24px',
  },
  '& .css-ahj2mt-MuiTypography-root': {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '18.2px',
  },
};

interface CheckboxesGroupProps {
  isCheckboxesJob: boolean;
  isShowAllClicked: boolean;
}

export default function CheckboxesGroup({
  isCheckboxesJob,
  isShowAllClicked,
}: CheckboxesGroupProps) {
  const [isWorkingChecked, setIsWorkingChecked] = useState(false);

  const handleShowJobInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsWorkingChecked(e.target.checked);
  };

  return (
    <>
      {isCheckboxesJob ? (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            rowGap: '10px',
            marginTop: '8px',
          }}
        >
          {isWorkingChecked ? (
            <Box
              sx={{ display: 'flex', flexDirection: 'column', rowGap: '4px' }}
            >
              <FormControlLabel
                checked={isWorkingChecked}
                sx={checkboxJobStyles}
                control={<Checkbox onChange={handleShowJobInputs} />}
                label={PERSONAL_DATA.checkboxJobLabels.working}
              />
              {PERSONAL_DATA.inputJobLabels.map((label) => {
                return <Input label={label} />;
              })}
            </Box>
          ) : (
            <FormControlLabel
              sx={checkboxJobStyles}
              control={<Checkbox onChange={handleShowJobInputs} />}
              label={PERSONAL_DATA.checkboxJobLabels.working}
            />
          )}

          <FormControlLabel
            sx={checkboxJobStyles}
            control={<Checkbox />}
            label={PERSONAL_DATA.checkboxJobLabels.studying}
          />

          <FormControlLabel
            sx={checkboxJobStyles}
            control={<Checkbox />}
            label={PERSONAL_DATA.checkboxJobLabels.jobHunting}
          />
        </Box>
      ) : (
        ''
      )}
      {isCheckboxesJob ? (
        ''
      ) : (
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '164px 164px',
            rowGap: '12px',
            marginTop: '12px',
          }}
        >
          {isShowAllClicked
            ? PERSONAL_DATA.checkboxLabels.map((label) => {
                return (
                  <FormControlLabel
                    key={label}
                    sx={checkboxStyles}
                    control={<Checkbox />}
                    label={label}
                  />
                );
              })
            : PERSONAL_DATA.checkboxLabels.slice(0, 8).map((label) => {
                return (
                  <FormControlLabel
                    key={label}
                    sx={checkboxStyles}
                    control={<Checkbox />}
                    label={label}
                  />
                );
              })}
        </Box>
      )}
    </>
  );
}
