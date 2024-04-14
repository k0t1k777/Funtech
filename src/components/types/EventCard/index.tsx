import IEvent from '../Event';

export default interface IEventCard extends IEvent {
  first_speaker: {
    company: string;
    id: number;
    photo: string;
    position: string;
    speaker_description: string;
    speaker_name: string;
  };
}
