import IEventPart from '../EventPart';

export default interface IEvent {
  additional_materials_link: string | null;
  city: {
    city_name: string;
    city_slug: string;
  };
  cost: number;
  description: string;
  end_time: string;
  event_parts: IEventPart[];
  event_type: {
    event_type_name: string;
  };
  format: string;
  id: number;
  image: string;
  is_deleted: boolean;
  is_featured: boolean;
  is_featured_on_yandex_afisha: boolean;
  is_registrated: boolean;
  livestream_link: string | null;
  name: string;
  organization: string;
  participant_offline_limit: number;
  participant_online_limit: number;
  place: string;
  registration_deadline: string;
  specializations: {
    specialization_name: string;
  };
  start_time: string;
  status: string;
}
