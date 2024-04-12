import './SpeakerCard.css';
import speakerImg from '../../../assets/speakerImg.png';
// import { EventCard } from '../Plan/Plan';

interface SpeakerCardProps {
  isPlanBlock: boolean;
  // eventId: EventCard[];
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
        >fgfg
          {/* {eventId[0]?.name} */}
          {/* {eventId?.event_parts[0]?.event_part_name} */}
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
            {/* {eventId?.event_parts[0]?.position} */}
          </p>
          <p
            className={`speaker-card__profession ${
              isPlanBlock ? 'speaker-card__profession_plan' : ''
            }`}
          >
            {/* {eventId?.event_parts[0]?.company} */}
          </p>
        </div>
      </div>
    </div>
  );
}
