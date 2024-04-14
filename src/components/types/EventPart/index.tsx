import ISpeaker from '../Speaker';

export default interface IEventPart {
  event_part: string;
  event_part_description: string;
  event_part_name: string;
  event_part_start_time: string;
  id: number;
  presentation_type: string;
  speaker: ISpeaker;
}