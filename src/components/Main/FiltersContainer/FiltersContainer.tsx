import Calendar from 'src/ui/Calendar/Calendar';
import BasicSelect from 'src/ui/Select/Select';
import CheckboxItem from 'src/ui/CheckboxItem';
import {
  CHECKBOX_TIME_DATA,
  CHECKBOX_SCILLS_DATA,
  CHECKBOX_DATA_CONST,
  CHECKBOX_DATA,
} from '../../../utils/constants';
import './FiltersContainer.css';

interface FiltersContainerProps {
  cities: Сities[];
  setCityValue?: (value: string) => void;
  cityValue?: string;
  formatFilter: string[];
  setFormatFilter: (type: string[]) => void;
  skillsFilter: string[];
  setSkilsFilter: (type: string[]) => void;
  typeFilter: string[];
  setTypeFilter: (type: string[]) => void;
}

export interface Сities {
  city_slug: string;
  city_name: string;
}

export default function FiltersContainer({
  cities,
  cityValue,
  setCityValue,
  formatFilter,
  setFormatFilter,
  skillsFilter,
  setSkilsFilter,
  typeFilter,
  setTypeFilter,
}: FiltersContainerProps) {
  return (
    <div className='filters-container'>
      <Calendar />
      <BasicSelect
        cities={cities}
        cityValue={cityValue}
        setCityValue={setCityValue}
      />
      <CheckboxItem
        option={CHECKBOX_TIME_DATA}
        value={formatFilter}
        setValue={setFormatFilter}
      />
      <CheckboxItem
        title={CHECKBOX_DATA.line}
        option={CHECKBOX_SCILLS_DATA}
        value={skillsFilter}
        setValue={setSkilsFilter}
      />
      <CheckboxItem
        title={CHECKBOX_DATA.type}
        option={CHECKBOX_DATA_CONST}
        value={typeFilter}
        setValue={setTypeFilter}
      />
    </div>
  );
}
