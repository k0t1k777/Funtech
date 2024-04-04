import './Main.css';
import News from './News/News';
import FiltersContainer from './FiltersContainer/FiltersContainer';

export default function Main() {
  return (
    <div className='main'>
      <News />
      <FiltersContainer />
    </div>
  );
}
