import './Event.css';
import About from './About/About';
import Speakers from './Speakers/Speakers';
import Plan from './Plan/Plan';
import Registration from './Registration/Registration';
import Place from './Place/Place';
import Courses from './Courses/Courses';

export default function Event() {
  return (
    <div className='event'>
      <div className='event__container'>
        <About />
        <Speakers />
        <Plan />
      </div>
      <div className='event__container'>
        <Registration />
        <Place />
      </div>
      <Courses />
    </div>
  );
}
