import { Checkbox, FormControlLabel, Box } from '@mui/material';
import { checkboxDirection } from 'src/ui/Popups/PopupRegOnEvent/CheckboxesGroup/CheckboxStyles';

interface CheckboxesGroupProps {
  isShowAllClicked: boolean;
  specializations: {
    specialization_name: string;
    specialization_slug: string;
  }[];
}

export default function CheckboxesGroupDirection({
  isShowAllClicked,
  specializations,
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
        ? specializations.map((spec, index) => {
            return (
              <FormControlLabel
                control={<Checkbox />}
                sx={checkboxDirection}
                key={index}
                label={spec.specialization_name}
                name={spec.specialization_slug}
              />
            );
          })
        : specializations.slice(0, 8).map((spec, index) => {
            return (
              <FormControlLabel
                control={<Checkbox />}
                sx={checkboxDirection}
                key={index}
                label={spec.specialization_name}
                name={spec.specialization_slug}
              />
            );
          })}
    </Box>
  );
}
