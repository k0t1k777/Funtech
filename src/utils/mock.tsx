
export const CITY_DATA = [
  { city_slug: 'Москва' },
  { city_slug: 'Питер' },
  { city_slug: 'Казань' },
  { city_slug: 'Екатеринбург' },
  { city_slug: 'Владивосток' }
];

export const EVENTS = [
  {
    id: 1,
    name: 'Введение в TensorFlow',
    first_speaker: {
      position: 'Инженер по ML',
      speaker_name: 'Сергей Петров',
      company: 'Google',
    },
    specializations: {
      specialization_name: 'Backend',
    },
    event_type: {
      event_type_name: 'Конференция',
    },
    format: 'offline',
    status: '	registration is open',
    is_registrated: true,
    is_deleted: false,
    // image: url('./../'),
    start_time: '2024-04-20 10:00:00+03:00',
    end_time: '2024-04-23 10:45:00+03:00',
  },
  {
    id: 2,
    name: 'Глубокое обучение с PyTorch',
    first_speaker: {
      position: 'Операции в TensorFlow',
      speaker_name: 'Сергей Петров',
      company: 'Яндекс',
    },
    specializations: {
      specialization_name: 'Backend',
    },
    event_type: {
      event_type_name: 'Конференция',
    },
    format: 'offline',
    status: 'registration is open',
    is_registrated: false,
    is_deleted: false,
    image: 'URL_изображения_2',
    start_time: '2024-04-20 10:45:00+03:00',
    end_time: '2024-04-21 10:45:00+03:00',
  },
  {
    id: 3,
    name: 'Сверточные нейронные сети',
    first_speaker: {
      position: 'Главный исследователь',
      speaker_name: 'Мария Смирнова',
      company: 'Яндекс',
    },
    specializations: {
      specialization_name: 'UX/UI',
    },
    event_type: {
      event_type_name: 'Встреча',
    },
    format: 'hybrid',
    status: 'registration is closed',
    is_registrated: false,
    is_deleted: false,
    image: 'URL_изображения_2',
    start_time: '2024-04-17 10:00:00+03:00',
    end_time: '2024-04-19 10:00:00+03:00',
  },
  {
    id: 4,
    name: 'Введение в Django',
    first_speaker: {
      position: 'Инженер по ML',
      speaker_name: 'Алексей Иванов',
      company: 'Mail',
    },
    specializations: {
      specialization_name: 'AI',
    },
    event_type: {
      event_type_name: 'Встреча',
    },
    format: 'hybrid',
    status: 'registration is closed',
    is_registrated: false,
    is_deleted: false,
    image: 'URL_изображения_2',
    start_time: '2024-04-22 10:00:00+03:00',
    end_time: '2024-04-23 10:00:00+03:00',
  },
  {
    id: 5,
    name: 'Тестирование с Selenium',
    first_speaker: {
      position: 'Ведущий специалист по ML2',
      speaker_name: 'Анна Морозова',
      company: 'JetBrains',
    },
    specializations: {
      specialization_name: 'ML',
    },
    event_type: {
      event_type_name: 'Вебинар',
    },
    format: 'online',
    status: 'registration is closed',
    is_registrated: false,
    is_deleted: false,
    image: 'URL_изображения_2',
    start_time: '2024-04-25 10:00:00+03:00',
    end_time: '2024-04-28 10:00:00+03:00',
  },
  {
    id: 6,
    name: 'Тестирование с JMeter',
    first_speaker: {
      position: 'Главный исследователь',
      speaker_name: 'Андрей Соколов',
      company: 'VK',
    },
    specializations: {
      specialization_name: 'QA',
    },
    event_type: {
      event_type_name: 'Воркшоп',
    },
    format: 'online',
    status: 'registration is open',
    is_registrated: false,
    is_deleted: false,
    image: 'URL_изображения_2',
    start_time: '2024-04-28 10:00:00+03:00',
    end_time: '2024-04-28 10:00:00+03:00',
  },
];

export const PERSONAL_EVENTS = [
  {
    id: 7,
    name: 'Waterfall vs Agile',
    first_speaker: {
      position: 'Инженер по ML',
      speaker_name: 'Елена Попова',
      company: 'Ланит',
    },
    specializations: {
      specialization_name: 'DevOps',
    },
    event_type: {
      event_type_name: 'Вебинар',
    },
    format: 'online',
    status: '	registration is open',
    is_registrated: false,
    is_deleted: false,
    image: 'URL_изображения_2',
    start_time: '2024-04-24 10:00:00+03:00',
    end_time: '2024-04-25 10:00:00+03:00',
  },
  {
    id: 8,
    name: 'Тестирование веб-приложений',
    first_speaker: {
      position: 'Ведущий специалист по ML',
      speaker_name: 'Дмитрий Петров',
      company: 'Контур',
    },
    specializations: {
      specialization_name: 'Аналитика',
    },
    event_type: {
      event_type_name: 'Воркшоп',
    },
    format: 'hybrid',
    status: 'registration is closed',
    is_registrated: false,
    is_deleted: false,
    image: 'URL_изображения_2',
    start_time: '2024-04-21 10:00:00+03:00',
    end_time: '2024-04-22 10:00:00+03:00',
  },
  {
    id: 9,
    name: 'Введение в Docker',
    first_speaker: {
      position: 'Главный инженер',
      speaker_name: 'Виктория Смирнова',
      company: 'Skolkovo',
    },
    specializations: {
      specialization_name: 'QA',
    },
    event_type: {
      event_type_name: 'Воркшоп',
    },
    format: 'online',
    status: 'registration is open',
    is_registrated: false,
    is_deleted: false,
    image: 'URL_изображения_2',
    start_time: '2024-04-21 10:00:00+03:00',
    end_time: '2024-04-22 10:00:00+03:00',
  },
];