import { Checkbox, FormControlLabel, Box } from '@mui/material';
import { REG_ON_IVENT_DATA } from '../../../../utils/constants';
import { checkboxDirection } from './CheckboxStyles';

interface CheckboxesGroupProps {
  isShowAllClicked: boolean;
}

export default function CheckboxesGroupDirection({
  isShowAllClicked,
}: CheckboxesGroupProps) {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: 'repeat(4, 130px)',
        marginTop: '8px',
        columnGap: '14px',
        rowGap: '12px',
      }}
    >
      {isShowAllClicked
        ? REG_ON_IVENT_DATA.checkboxLabels.map((label) => {
            return (
              <FormControlLabel
                control={<Checkbox />}
                sx={checkboxDirection}
                key={label}
                label={label}
              />
            );
          })
        : REG_ON_IVENT_DATA.checkboxLabels.slice(0, 8).map((label) => {
            return (
              <FormControlLabel
                control={<Checkbox />}
                sx={checkboxDirection}
                key={label}
                label={label}
              />
            );
          })}
    </Box>
  );
}
