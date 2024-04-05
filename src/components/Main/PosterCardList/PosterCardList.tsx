import './PosterCardList.css';
import PosterCard from '../PosterCard/PosterCard';
import { Link } from 'react-router-dom';

export default function PosterCardList() {
  const posterCards = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
  ];

  return (
    <div className='poster-cards'>
      {posterCards.map((card) => (
        <Link key={card.id} to={`/event/${card.id}`}>
          <PosterCard />
        </Link>
      ))}
    </div>
  );
}
