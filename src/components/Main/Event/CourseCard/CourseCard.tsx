import 'src/components/Main/Event/CourseCard/CourseCard.css';
import courseImg from 'src/assets/images/courseImg.jpeg';

export default function CourseCard() {
  return (
    <div className='course-card'>
      <img className='course-card__img' src={courseImg} alt='courseImg' />
      <div className='course-card__container'>
        <h3 className='course-card__title'>ML Meet Up</h3>
        <p className='course-card__date'>04 апреля 2024</p>
      </div>
    </div>
  );
}
