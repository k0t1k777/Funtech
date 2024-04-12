import './SpeakerCard.css';
import speakerImg from '../../../assets/speakerImg.png';

interface SpeakerCardProps {
  isPlanBlock: boolean;
}

export default function SpeakerCard({ isPlanBlock }: SpeakerCardProps) {
  return (
    <div className={`speaker-card ${isPlanBlock ? 'speaker-card_plan' : ''}`}>
      <img
        className={`speaker-card__img ${
          isPlanBlock ? 'speaker-card__img_plan' : ''
        }`}
        src={speakerImg}
        alt='speaker'
      />
      <div
        className={`speaker-card__info ${
          isPlanBlock ? 'speaker-card__info_plan' : ''
        }`}
      >
        <h3
          className={`speaker-card__title ${
            isPlanBlock ? 'speaker-card__title_plan' : ''
          }`}
        >
          DJ Pandas as PD
        </h3>
        <div
          className={`speaker-card__professions ${
            isPlanBlock ? 'speaker-card__professions_plan' : ''
          }`}
        >
          <p
            className={`speaker-card__profession ${
              isPlanBlock ? 'speaker-card__profession_plan' : ''
            }`}
          >
            AI/ML инженер
          </p>
          <p
            className={`speaker-card__profession ${
              isPlanBlock ? 'speaker-card__profession_plan' : ''
            }`}
          >
            ClosedAI
          </p>
        </div>
      </div>
    </div>
  );
}
