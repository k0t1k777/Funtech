import CourseCard from '../CourseCard/CourseCard';
import './Courses.css';
import { COURSES_DATA } from './../../../utils/constants';

// export interface CoursesProps {
//   eventId: EventCard[];
// }

// export interface EventCard {
//   place?: string;
// }

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
