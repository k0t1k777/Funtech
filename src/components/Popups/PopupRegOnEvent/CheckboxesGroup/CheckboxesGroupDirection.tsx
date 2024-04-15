import { Checkbox, FormControlLabel, Box } from '@mui/material';
import { checkboxDirection } from './CheckboxStyles';

interface CheckboxesGroupProps {
  isShowAllClicked: boolean;
  specializations: {
    specialization_name: string;
    specialization_slug: string;
  }[];
  valuesSpec: { [key: string]: boolean };
  setValuesSpec: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}

export default function CheckboxesGroupDirection({
  isShowAllClicked,
  valuesSpec,
  specializations,
  setValuesSpec,
}: CheckboxesGroupProps) {
  const handleChangeSpec = (
    event: React.SyntheticEvent<Element, Event>,
    checked: boolean
  ) => {
    const { name } = event.currentTarget as HTMLInputElement;
    setValuesSpec((prevValues) => ({
      ...prevValues,
      [name]: checked,
    }));
  };

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
                onChange={handleChangeSpec}
                checked={valuesSpec[spec.specialization_slug] ?? false}
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
                onChange={handleChangeSpec}
                checked={valuesSpec[spec.specialization_slug] ?? false}
              />
            );
          })}
    </Box>
  );
}
