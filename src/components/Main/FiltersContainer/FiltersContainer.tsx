import Calendar from 'src/ui/Calendar/Calendar';
import BasicSelect from 'src/ui/Select/Select';
import CheckboxItem from 'src/ui/CheckboxItem';
import dayjs from 'dayjs';
import {
  CHECKBOX_TIME_DATA,
  CHECKBOX_SCILLS_DATA,
  CHECKBOX_DATA_CONST,
  CHECKBOX_DATA,
} from 'src/utils/constants';
import 'src/components/Main/FiltersContainer/FiltersContainer.css';

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
  date: [dayjs.Dayjs, dayjs.Dayjs];
  setDate:React.Dispatch<React.SetStateAction<[dayjs.Dayjs, dayjs.Dayjs]>>;
  setShowDateAfter: React.Dispatch<React.SetStateAction<string | null>>;
  setShowDateBefore: React.Dispatch<React.SetStateAction<string | null>>;
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
  date,
  setDate,
  setShowDateAfter,
  setShowDateBefore,
}: FiltersContainerProps) {
  return (
    <div className='filters-container'>
      <Calendar
        value={date}
        setValue={setDate}
        setShowDateBefore={setShowDateBefore}
        setShowDateAfter={setShowDateAfter}
      />
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
