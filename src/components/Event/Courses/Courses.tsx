import CourseCard from '../CourseCard/CourseCard';
import './Courses.css';

export default function Courses() {
  return (
    <div className='courses'>
      <h2 className='courses__title'>Похожие</h2>
      <div className='courses__container'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}
