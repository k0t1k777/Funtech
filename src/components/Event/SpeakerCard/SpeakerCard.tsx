import './SpeakerCard.css';

interface ISpeakerCardProps {
  isPlanBlock: boolean;
  speakerName: string;
  speakerCompany: string;
  speakerPosition: string;
  speakerPhoto: string;
}

export default function SpeakerCard({
  isPlanBlock,
  speakerName,
  speakerCompany,
  speakerPosition,
  speakerPhoto,
}: ISpeakerCardProps) {
  return (
    <div className={`speaker-card ${isPlanBlock ? 'speaker-card_plan' : ''}`}>
      <img
        className={`speaker-card__img ${
          isPlanBlock ? 'speaker-card__img_plan' : ''
        }`}
        src={speakerPhoto}
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
          {speakerName}
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
            {speakerPosition}
          </p>
          <p
            className={`speaker-card__profession ${
              isPlanBlock ? 'speaker-card__profession_plan' : ''
            }`}
          >
            {speakerCompany}
          </p>
        </div>
      </div>
    </div>
  );
}
