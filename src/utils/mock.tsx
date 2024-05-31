export const CITY_DATA = [
  { city_slug: 'Москва' },
  { city_slug: 'Питер' },
  { city_slug: 'Казань' },
  { city_slug: 'Екатеринбург' },
];

export const EVENTS = [
  {
    id: 1,
    name: "Название события 1",
    first_speaker: {
      position: "Должность спикера 1",
      speaker_name: "Имя спикера 1",
      company: "Компания спикера 1"
    },
    specializations: {
      specialization_name: "Специализация 1"
    },
    event_type: {
      event_type_name: "Тип события 1"
    },
    format: "Формат события 1",
    status: "Статус события 1",
    is_registrated: true,
    is_deleted: false,
    image: "URL_изображения_1",
    start_time: "2023-08-15T10:00:00Z",
    end_time: "2023-08-15T12:00:00Z"
  },
  {
    id: 2,
    name: "Название события 2",
    first_speaker: {
      position: "Должность спикера 2",
      speaker_name: "Имя спикера 2",
      company: "Компания спикера 2"
    },
    specializations: {
      specialization_name: "Специализация 2"
    },
    event_type: {
      event_type_name: "Тип события 2"
    },
    format: "Формат события 2",
    status: "Статус события 2",
    is_registrated: false,
    is_deleted: false,
    image: "URL_изображения_2",
    start_time: "2023-09-20T15:00:00Z",
    end_time: "2023-09-20T17:00:00Z"
  }
];