import 'src/components/Main/Event/Speakers/Speakers.css';
import SpeakerCard from 'src/components/Main/Event/SpeakerCard/SpeakerCard';
import { SPEAKERS_DATA } from 'src/utils/constants';
import { useEffect, useState } from 'react';

export interface ISpeakersProps {
  event?: any;
}

export default function Speakers({ event }: ISpeakersProps) {
  const [randomEvents, setRandomEvents] = useState<any>([]);

  useEffect(() => {
    const randomIndexes: any = [];
    while (randomIndexes.length < 2) {
      const randomIndex = Math.floor(Math.random() * event.length);
      if (!randomIndexes.includes(randomIndex)) {
        randomIndexes.push(randomIndex);
      }
    }
    const selectedEvents = randomIndexes.map((index: number) => event[index]);
    setRandomEvents(selectedEvents);
  }, [event]);

  return (
    <div className='speakers'>
      <h2 className='speakers__title'>{SPEAKERS_DATA.text}</h2>
      <div className='speakers__container'>
        {randomEvents?.slice(0, 2).map((event: any) => {
          return (
            <div key={event.id}>
              <SpeakerCard
                speakerName={event?.first_speaker.speaker_name}
                speakerCompany={event?.first_speaker.company}
                speakerPosition={event?.first_speaker.position}
                speakerPhoto={event?.first_speaker.photo}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
