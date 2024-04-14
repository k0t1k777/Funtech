import Calendar from '../../Calendar/Calendar';
import BasicSelect from '../../Select/Select';
import CheckboxesTime from '../../Filters/CheckboxesTime/CheckboxesTime';
import CheckboxesScills from '../../Filters/CheckboxesScills/CheckboxesScills';
import CheckboxesTypes from '../../Filters/CheckboxesTypes/CheckboxesTypes';
import './FiltersContainer.css';
import { SelectProps } from '../../Select/Select';

interface FiltersContainerProps {
  cities: SelectProps[];
  setCityValue?: (value: string) => void;
  cityValue?: string;
}

export default function FiltersContainer({
  cities,
  cityValue,
  setCityValue,
}: FiltersContainerProps) {
  return (
    <div className='filters-container'>
      <Calendar />
      <BasicSelect
        cities={cities}
        cityValue={cityValue}
        setCityValue={setCityValue}
      />
      <CheckboxesTime />
      <CheckboxesScills />
      <CheckboxesTypes />
    </div>
  );
}
