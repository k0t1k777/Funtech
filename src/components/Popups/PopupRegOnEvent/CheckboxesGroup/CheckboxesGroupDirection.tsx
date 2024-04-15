import { Checkbox, FormControlLabel, Box } from '@mui/material';
import { REG_ON_IVENT_DATA } from '../../../../utils/constants';
import { checkboxDirection } from './CheckboxStyles';

interface CheckboxesGroupProps {
  isShowAllClicked: boolean;
  valuesSpec:  { [key: string]: boolean };
  setValuesSpec: React.Dispatch<
    React.SetStateAction<{ [key: string]: boolean }>
  >;
}

export default function CheckboxesGroupDirection({
  isShowAllClicked,
  valuesSpec,
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
        ? REG_ON_IVENT_DATA.checkboxLabels.map((label) => {
            return (
              <FormControlLabel
                control={<Checkbox />}
                sx={checkboxDirection}
                key={label}
                label={label}
                name={label}
                onChange={handleChangeSpec}
                checked={valuesSpec[label] ?? false}
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
                name={label}
                onChange={handleChangeSpec}
                checked={valuesSpec[label] ?? false}
              />
            );
          })}
    </Box>
  );
}
