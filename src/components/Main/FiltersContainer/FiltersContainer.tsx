import Calendar from '../../Calendar/Calendar';
import BasicSelect from '../../Select/Select';
import Checkboxes from '../../Checkboxes/Checkboxes';
import './FiltersContainer.css';

export default function FiltersContainer() {
  return (
    <div className='filters-container'>
      <Calendar />
      <BasicSelect />
      <Checkboxes />
    </div>
  );
}
