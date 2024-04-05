import './EventsPoster.css';
import PosterCardList from '../PosterCardList/PosterCardList';

export default function EventsPoster() {
  return (
    <div className='events-poster'>
      <h2 className='events-poster__title'>Афиша событий</h2>
      <PosterCardList />
    </div>
  );
}
