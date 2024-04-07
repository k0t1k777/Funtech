import './Speakers.css';
import SpeakerCard from '../SpeakerCard/SpeakerCard';

export default function Speakers() {
  return (
    <div className='speakers'>
      <h2 className='speakers__title'>Спикер</h2>
      <div className='speakers__container'>
        <SpeakerCard isPlanBlock={false} />
        <SpeakerCard isPlanBlock={false} />
      </div>
    </div>
  );
}
