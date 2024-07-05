import 'src/components/Main/Event/SpeakerCard/SpeakerCard.css';

interface ISpeakerCardProps {
  speakerName: string;
  speakerCompany: string;
  speakerPosition: string;
  speakerPhoto: string;
}

export default function SpeakerCard({
  speakerName,
  speakerCompany,
  speakerPosition,
  speakerPhoto,
}: ISpeakerCardProps) {
  return (
    <div className='speaker-card speaker-card_plan'>
      <img
        className='speaker-card__img speaker-card__img_plan'
        src={speakerPhoto}
        alt='speaker'
      />
      <div
        className='speaker-card__info speaker-card__info_plan'
      >
        <h3
          className='speaker-card__title isPlanBlock speaker-card__title_plan'
        >
          {speakerName}
        </h3>
        <div
          className='speaker-card__professions speaker-card__professions_plan'
        >
          <p
            className='speaker-card__profession speaker-card__profession_plan'
          >
            {speakerPosition}
          </p>
          <p
            className='speaker-card__profession speaker-card__profession_plan'
          >
            {speakerCompany}
          </p>
        </div>
      </div>
    </div>
  );
}
