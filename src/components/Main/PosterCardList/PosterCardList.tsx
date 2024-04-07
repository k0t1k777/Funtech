import './PosterCardList.css';
import PosterCard from '../PosterCard/PosterCard';

export default function PosterCardList() {
  const posterCards = [
    { id: 1 },
    { id: 2 },
    { id: 3 },
    { id: 4 },
    { id: 5 },
    { id: 6 },
  ];

  return (
    <div className='poster-cards'>
      {posterCards.map((card) => (
        <PosterCard key={card.id} eventId={card.id} />
      ))}
    </div>
  );
}
