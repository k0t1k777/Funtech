import Calendar from '../../Calendar/Calendar';
import BasicSelect from '../../Select/Select';
import CheckboxesTime from '../../Filters/CheckboxesTime/CheckboxesTime';
import CheckboxesScills from '../../Filters/CheckboxesScills/CheckboxesScills';
import CheckboxesTypes from '../../Filters/CheckboxesTypes/CheckboxesTypes';

import './FiltersContainer.css';

export default function FiltersContainer() {
  return (
    <div className='filters-container'>
      <Calendar />
      <BasicSelect />
      <CheckboxesTime />
      <CheckboxesScills />
      <CheckboxesTypes />
    </div>
  );
}
