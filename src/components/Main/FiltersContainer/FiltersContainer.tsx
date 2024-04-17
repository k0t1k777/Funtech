import Calendar from '../../Calendar/Calendar';
import BasicSelect from '../../Select/Select';
import CheckboxesTime from '../../Filters/CheckboxesTime/CheckboxesTime';
import CheckboxesScills from '../../Filters/CheckboxesScills/CheckboxesScills';
import CheckboxesTypes from '../../Filters/CheckboxesTypes/CheckboxesTypes';
import './FiltersContainer.css';

interface FiltersContainerProps {
  cities: Сities[];
  setCityValue?: (value: string) => void;
  cityValue?: string;
  loggedIn: boolean;
  superUser: boolean;
}

export interface Сities {
  city_slug: string;
  city_name: string;
}

export default function FiltersContainer({
  cities,
  cityValue,
  loggedIn,
  superUser,
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
      <CheckboxesTime loggedIn={loggedIn} superUser={superUser} />
      <CheckboxesScills />
      <CheckboxesTypes />
    </div>
  );
}
