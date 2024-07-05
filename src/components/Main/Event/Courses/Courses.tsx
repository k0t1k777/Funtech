import CourseCard from 'src/components/Main/Event/CourseCard/CourseCard';
import 'src/components/Main/Event/Courses/Courses.css';
import { COURSES_DATA } from 'src/utils/constants';

export default function Courses() {
  return (
    <div className='courses'>
      <h2 className='courses__title'>{COURSES_DATA.text}</h2>
      <div className='courses__container'>
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </div>
    </div>
  );
}
