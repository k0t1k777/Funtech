export const CITY_DATA = [
  { city_slug: 'Москва' },
  { city_slug: 'Питер' },
  { city_slug: 'Казань' },
  { city_slug: 'Екатеринбург' },
  { city_slug: 'Владивосток' },
];

export const EVENTS = [
  {
    id: 1,
    name: 'Введение в TensorFlow',
    first_speaker: {
      position: 'Инженер по ML',
      speaker_name: 'Сергей Петров',
      photo: './../src/assets/images/1photo.png',
      company: 'Google',
    },
    specializations: {
      specialization_name: 'Backend',
    },
    event_type: {
      event_type_name: 'Конференция',
    },
    format: 'offline',
    status: 'registration is open',
    is_registrated: true,
    is_deleted: false,
    description:
      'Митап на котором обсуждаются основы TensorFlow популярного фреймворка для машинного обучения.',
    image: './../src/assets/images/1.png',
    start_time: '2024-04-20 10:00:00+03:00',
    end_time: '2024-04-23 10:45:00+03:00',
    event_parts: {
      event_part_start_time: '2024-04-20 10:00:00+03:00',
      event_part_name: 'Введение в TensorFlow',
      event_part_description: 'Более подробно поговорим о теме доклада',
    },
  },
  {
    id: 2,
    name: 'Глубокое обучение с PyTorch',
    first_speaker: {
      position: 'Операции в TensorFlow',
      speaker_name: 'Иван Андреев',
      company: 'Яндекс',
      photo: './../src/assets/images/3photo.png',
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
    image: './../src/assets/images/2.png',
    description:
      'Вебинар на котором обсуждаются основы глубокого обучения с использованием PyTorch.',
    start_time: '2024-04-20 10:45:00+03:00',
    end_time: '2024-04-21 10:45:00+03:00',
    event_parts: {
      event_part_start_time: '2024-04-20 10:00:00+03:00',
      event_part_name: 'Введение в TensorFlow',
      event_part_description: 'Более подробно поговорим о теме доклада',
    },
  },
  {
    id: 3,
    name: 'Сверточные нейронные сети',
    first_speaker: {
      position: 'Главный исследователь',
      speaker_name: 'Юлия Мирова',
      company: 'Яндекс',
      photo: './../src/assets/images/10photo.jpeg',
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
    image: './../src/assets/images/3.png',
    description:
      'Встреча на которой обсуждаются возможности использования сверточных нейронных сетей в компьютерном зрении.',
    start_time: '2024-04-17 10:00:00+03:00',
    end_time: '2024-04-19 10:00:00+03:00',
    event_parts: {
      event_part_start_time: '2024-04-20 10:00:00+03:00',
      event_part_name: 'Введение в TensorFlow',
      event_part_description: 'Более подробно поговорим о теме доклада',
    },
  },
  {
    id: 4,
    name: 'Введение в Django',
    first_speaker: {
      position: 'Инженер по ML',
      speaker_name: 'Энэсс Иванов',
      company: 'Mail',
      photo: './../src/assets/images/12photo.jpeg',
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
    image: './../src/assets/images/4.png',
    description:
      'Конференция на которой обсуждаются возможности использования машинного обучения в финансовом секторе.',
    start_time: '2024-04-22 10:00:00+03:00',
    end_time: '2024-04-23 10:00:00+03:00',
    event_parts: {
      event_part_start_time: '2024-04-20 10:00:00+03:00',
      event_part_name: 'Введение в TensorFlow',
      event_part_description: 'Более подробно поговорим о теме доклада',
    },
  },
  {
    id: 5,
    name: 'Тестирование с Selenium',
    first_speaker: {
      position: 'Специалист по ML2',
      speaker_name: 'Анна Морозова',
      company: 'JetBrains',
      photo: './../src/assets/images/6photo.jpeg',
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
    image: './../src/assets/images/7.png',
    description:
      'Митап на котором обсуждаются Автоматизация тестирования с Selenium.',
    start_time: '2024-04-25 10:00:00+03:00',
    end_time: '2024-04-28 10:00:00+03:00',
    event_parts: {
      event_part_start_time: '2024-04-20 10:00:00+03:00',
      event_part_name: 'Введение в TensorFlow',
      event_part_description: 'Более подробно поговорим о теме доклада',
    },
  },
  {
    id: 6,
    name: 'Тестирование с JMeter',
    first_speaker: {
      position: 'Главный исследователь',
      speaker_name: 'Юрий Соколов',
      company: 'VK',
      photo: './../src/assets/images/11photo.jpeg',
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
    image: './../src/assets/images/6.png',
    description:
      'Вебинар на котором обсуждаются Тестирование производительности с JMeter.',
    start_time: '2024-04-28 10:00:00+03:00',
    end_time: '2024-04-28 10:00:00+03:00',
    event_parts: {
      event_part_start_time: '2024-04-20 10:00:00+03:00',
      event_part_name: 'Введение в TensorFlow',
      event_part_description: 'Более подробно поговорим о теме доклада',
    },
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
      photo: './../src/assets/images/2.png',
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
    image: './../src/assets/images/4.png',
    description:
      'Встреча на которой обсуждаются Методологии тестирования: Waterfall vs Agile.',
    start_time: '2024-04-24 10:00:00+03:00',
    end_time: '2024-04-25 10:00:00+03:00',
    event_parts: {
      event_part_start_time: '2024-04-20 10:00:00+03:00',
      event_part_name: 'Введение в TensorFlow',
      event_part_description: 'Более подробно поговорим о теме доклада',
    },
  },
  {
    id: 8,
    name: 'Тестирование веб-приложений',
    first_speaker: {
      position: 'Ведущий специалист по ML',
      speaker_name: 'Дмитрий Петров',
      company: 'Контур',
      photo: './../src/assets/images/2.png',
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
    image: './../src/assets/images/5.png',
    description:
      'Конференция на которой обсуждаются возможности использования Тестирование безопасности веб-приложений.',
    start_time: '2024-04-21 10:00:00+03:00',
    end_time: '2024-04-22 10:00:00+03:00',
    event_parts: {
      event_part_start_time: '2024-04-20 10:00:00+03:00',
      event_part_name: 'Введение в TensorFlow',
      event_part_description: 'Более подробно поговорим о теме доклада',
    },
  },
  {
    id: 9,
    name: 'Введение в Docker',
    first_speaker: {
      position: 'Главный инженер',
      speaker_name: 'Виктория Смирнова',
      company: 'Skolkovo',
      photo: './../src/assets/images/2.png',
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
    image: './../src/assets/images/8.png',
    description:
      'Митап, на котором обсуждаются основы работы с Docker, инструментом для создания, развертывания и управления контейнерами.',
    start_time: '2024-04-21 10:00:00+03:00',
    end_time: '2024-04-22 10:00:00+03:00',
    event_parts: {
      event_part_start_time: '2024-04-20 10:00:00+03:00',
      event_part_name: 'Введение в TensorFlow',
      event_part_description: 'Более подробно поговорим о теме доклада',
    },
  },
];
