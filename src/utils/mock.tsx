export const CITY_DATA = [
  { city_slug: 'Москва' },
  { city_slug: 'С-Петербург' },
  { city_slug: 'Казань' },
  { city_slug: 'Екатеринбург' },
  { city_slug: 'Владивосток' },
];

export const SPECIALIZATION_DATA = [
  {
    specialization_name: 'Backend',
    specialization_slug: 'frontend',
  },
  {
    specialization_name: 'Backend',
    specialization_slug: 'backend',
  },
  {
    specialization_name: 'UX/UI',
    specialization_slug: 'uxui',
  },
  {
    specialization_name: 'AI',
    specialization_slug: 'ai',
  },
  {
    specialization_name: 'ML',
    specialization_slug: 'ml',
  },
  {
    specialization_name: 'QA',
    specialization_slug: 'qa',
  },
  {
    specialization_name: 'DevOps',
    specialization_slug: 'devops',
  },
  {
    specialization_name: 'Аналитика',
    specialization_slug: 'analytics',
  },
  {
    specialization_name: 'PM',
    specialization_slug: 'pm',
  },
];

export const EVENTS = [
  {
    id: 1,
    name: 'Введение в TensorFlow',
    first_speaker: {
      position: 'Инженер по ML',
      speaker_name: 'Сергей Петров',
      photo: '../src/assets/images/1photo.png',
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
    place: 'Екатеринбург',
    street: 'пер. Архангельского',
    event_parts: [
      {
        id: 0,
        event_part_start_time: '2024-04-20 10:00:00+03:00',
        event_part_name: 'Введение в TensorFlow',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 1,
        event_part_start_time: '2024-04-20 10:45:00+03:00	',
        event_part_name: 'Тензоры и операции в TensorFlow',
        event_part_description: 'Более подробно поговорим о теме доклада	',
      },
      {
        id: 2,
        event_part_start_time: '2024-04-20 11:30:00+03:00',
        event_part_name: 'Кофе-брейк',
        event_part_description: 'Немого отдохнем',
      },
      {
        id: 3,
        event_part_start_time: '2024-04-20 12:00:00+03:00',
        event_part_name: 'Обучение нейронных сетей в TensorFlow',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 4,
        event_part_start_time: '2024-04-20 12:45:00+03:00',
        event_part_name: 'Продвинутые техники в TensorFlow',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
    ],
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
    place: 'Москва',
    street: 'ул. Баумана',
    event_parts: [
      {
        id: 0,
        event_part_start_time: '2024-04-20 10:00:00+03:00',
        event_part_name: 'Основы PyTorch',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 1,
        event_part_start_time: '2024-04-20 10:45:00+03:00	',
        event_part_name: 'Модели глубокого обучения в PyTorch',
        event_part_description: 'Более подробно поговорим о теме доклада	',
      },
      {
        id: 2,
        event_part_start_time: '2024-04-20 11:30:00+03:00',
        event_part_name: 'Кофе-брейк',
        event_part_description: 'Немого отдохнем',
      },
      {
        id: 3,
        event_part_start_time: '2024-04-20 12:00:00+03:00',
        event_part_name: 'Применение PyTorch в реальных проектах',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 4,
        event_part_start_time: '2024-04-20 12:45:00+03:00',
        event_part_name: 'Оптимизация производительности с PyTorch',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
    ],
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
    place: 'Москва',
    street: 'ул. Кузнецова',
    event_parts: [
      {
        id: 0,
        event_part_start_time: '2024-04-20 10:00:00+03:00',
        event_part_name: 'Основы сверточных нейронных сетей',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 1,
        event_part_start_time: '2024-04-20 10:45:00+03:00	',
        event_part_name: 'Сверточные сети в задачах компьютерного зрения',
        event_part_description: 'Более подробно поговорим о теме доклада	',
      },
      {
        id: 2,
        event_part_start_time: '2024-04-20 11:30:00+03:00',
        event_part_name: 'Кофе-брейк',
        event_part_description: 'Немого отдохнем',
      },
      {
        id: 3,
        event_part_start_time: '2024-04-20 12:00:00+03:00',
        event_part_name: 'Случаи использования сверточных сетей',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 4,
        event_part_start_time: '2024-04-20 12:45:00+03:00',
        event_part_name: 'Оптимизация сверточных сетей',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
    ],
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
    place: 'Москва',
    street: 'пер. Рябиновый',
    event_parts: [
      {
        id: 0,
        event_part_start_time: '2024-04-20 10:00:00+03:00',
        event_part_name: 'Машинное обучение в банковском секторе',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 1,
        event_part_start_time: '2024-04-20 10:45:00+03:00	',
        event_part_name: 'Применение ML в страховании',
        event_part_description: 'Более подробно поговорим о теме доклада	',
      },
      {
        id: 2,
        event_part_start_time: '2024-04-20 11:30:00+03:00',
        event_part_name: 'Кофе-брейк',
        event_part_description: 'Немого отдохнем',
      },
      {
        id: 3,
        event_part_start_time: '2024-04-20 12:00:00+03:00',
        event_part_name: 'ML для предсказания финансового рынка',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 4,
        event_part_start_time: '2024-04-20 12:45:00+03:00',
        event_part_name: 'Будущее машинного обучения в финансах',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
    ],
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
    place: 'Москва',
    street: 'ул. Фурманова',
    event_parts: [
      {
        id: 0,
        event_part_start_time: '2024-04-20 10:00:00+03:00',
        event_part_name: 'Введение в Selenium',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 1,
        event_part_start_time: '2024-04-20 10:45:00+03:00	',
        event_part_name: 'Применение Selenium для автоматизации тестирования',
        event_part_description: 'Более подробно поговорим о теме доклада	',
      },
      {
        id: 2,
        event_part_start_time: '2024-04-20 11:30:00+03:00',
        event_part_name: 'Кофе-брейк',
        event_part_description: 'Немого отдохнем',
      },
      {
        id: 3,
        event_part_start_time: '2024-04-20 12:00:00+03:00',
        event_part_name: '	Реальный опыт использования Selenium',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 4,
        event_part_start_time: '2024-04-20 12:45:00+03:00',
        event_part_name: 'Selenium: Будущее автоматизации тестированияw',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
    ],
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
    place: 'Москва',
    street: 'ул. Шевченко',
    event_parts: [
      {
        id: 0,
        event_part_start_time: '2024-04-20 10:00:00+03:00',
        event_part_name: 'Введение в JMeter',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 1,
        event_part_start_time: '2024-04-20 10:45:00+03:00	',
        event_part_name:
          'Применение JMeter для тестирования производительности',
        event_part_description: 'Более подробно поговорим о теме доклада	',
      },
      {
        id: 2,
        event_part_start_time: '2024-04-20 11:30:00+03:00',
        event_part_name: 'Кофе-брейк',
        event_part_description: 'Немого отдохнем',
      },
      {
        id: 3,
        event_part_start_time: '2024-04-20 12:00:00+03:00',
        event_part_name: 'Реальный опыт использования JMeter',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 4,
        event_part_start_time: '2024-04-20 12:45:00+03:00',
        event_part_name: 'JMeter: Будущее тестирования производительности',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
    ],
  },
  {
    id: 7,
    name: 'Waterfall vs Agile',
    first_speaker: {
      position: 'Инженер по ML',
      speaker_name: 'Елена Попова',
      company: 'Ланит',
      photo: './../src/assets/images/4photo.png',
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
    place: 'С-Петербург',
    street: 'ул. 12 Сентября',
    event_parts: [
      {
        id: 0,
        event_part_start_time: '2024-04-20 10:00:00+03:00',
        event_part_name: 'Водопадная модель разработки и тестирования',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 1,
        event_part_start_time: '2024-04-20 10:45:00+03:00	',
        event_part_name: 'Гибкая методология разработки и тестирования',
        event_part_description: 'Более подробно поговорим о теме доклада	',
      },
      {
        id: 2,
        event_part_start_time: '2024-04-20 11:30:00+03:00',
        event_part_name: 'Кофе-брейк',
        event_part_description: 'Немого отдохнем',
      },
      {
        id: 3,
        event_part_start_time: '2024-04-20 12:00:00+03:00',
        event_part_name: 'Реальный опыт использования Waterfall и Agile',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 4,
        event_part_start_time: '2024-04-20 12:45:00+03:00',
        event_part_name: 'Waterfall vs Agile: Будущее методологий тестирования',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
    ],
  },
  {
    id: 8,
    name: 'Тестирование веб-приложений',
    first_speaker: {
      position: 'Ведущий специалист по ML',
      speaker_name: 'Дмитрий Петров',
      company: 'Контур',
      photo: './../src/assets/images/2photo.png',
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
    place: 'Казань',
    street: 'ул. Хвалынская',
    event_parts: [
      {
        id: 0,
        event_part_start_time: '2024-04-20 10:00:00+03:00',
        event_part_name: 'Введение в тестирование безопасности веб-приложений',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 1,
        event_part_start_time: '2024-04-20 10:45:00+03:00	',
        event_part_name: 'Методы тестирования безопасности веб-приложений',
        event_part_description: 'Более подробно поговорим о теме доклада	',
      },
      {
        id: 2,
        event_part_start_time: '2024-04-20 11:30:00+03:00',
        event_part_name: 'Кофе-брейк',
        event_part_description: 'Немого отдохнем',
      },
      {
        id: 3,
        event_part_start_time: '2024-04-20 12:00:00+03:00',
        event_part_name:
          'Реальный опыт тестирования безопасности веб-приложений',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 4,
        event_part_start_time: '2024-04-20 12:45:00+03:00',
        event_part_name: 'Тестирование безопасности веб-приложений: Будущее',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
    ],
  },
  {
    id: 9,
    name: 'Введение в Docker',
    first_speaker: {
      position: 'Главный инженер',
      speaker_name: 'Виктория Смирнова',
      company: 'Skolkovo',
      photo: './../src/assets/images/5photo.png',
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
    place: 'Владивосток',
    street: 'пер. Хлебный',
    event_parts: [
      {
        id: 0,
        event_part_start_time: '2024-04-20 10:00:00+03:00',
        event_part_name: 'Основы Docker',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 1,
        event_part_start_time: '2024-04-20 10:45:00+03:00	',
        event_part_name: '	Развёртывание приложений с Docker',
        event_part_description: 'Более подробно поговорим о теме доклада	',
      },
      {
        id: 2,
        event_part_start_time: '2024-04-20 11:30:00+03:00',
        event_part_name: 'Кофе-брейк',
        event_part_description: 'Немого отдохнем',
      },
      {
        id: 3,
        event_part_start_time: '2024-04-20 12:00:00+03:00',
        event_part_name: 'Управление контейнерами Docker',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 4,
        event_part_start_time: '2024-04-20 12:45:00+03:00',
        event_part_name: 'Развёртывание приложений с Docker',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
    ],
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
      photo: './../src/assets/images/4photo.png',
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
    place: 'С-Петербург',
    street: 'ул. 12 Сентября',
    event_parts: [
      {
        id: 0,
        event_part_start_time: '2024-04-20 10:00:00+03:00',
        event_part_name: 'Водопадная модель разработки и тестирования',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 1,
        event_part_start_time: '2024-04-20 10:45:00+03:00	',
        event_part_name: 'Гибкая методология разработки и тестирования',
        event_part_description: 'Более подробно поговорим о теме доклада	',
      },
      {
        id: 2,
        event_part_start_time: '2024-04-20 11:30:00+03:00',
        event_part_name: 'Кофе-брейк',
        event_part_description: 'Немого отдохнем',
      },
      {
        id: 3,
        event_part_start_time: '2024-04-20 12:00:00+03:00',
        event_part_name: 'Реальный опыт использования Waterfall и Agile',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 4,
        event_part_start_time: '2024-04-20 12:45:00+03:00',
        event_part_name: 'Waterfall vs Agile: Будущее методологий тестирования',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
    ],
  },
  {
    id: 8,
    name: 'Тестирование веб-приложений',
    first_speaker: {
      position: 'Ведущий специалист по ML',
      speaker_name: 'Дмитрий Петров',
      company: 'Контур',
      photo: './../src/assets/images/2photo.png',
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
    place: 'Казань',
    street: 'ул. Хвалынская',
    event_parts: [
      {
        id: 0,
        event_part_start_time: '2024-04-20 10:00:00+03:00',
        event_part_name: 'Введение в тестирование безопасности веб-приложений',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 1,
        event_part_start_time: '2024-04-20 10:45:00+03:00	',
        event_part_name: 'Методы тестирования безопасности веб-приложений',
        event_part_description: 'Более подробно поговорим о теме доклада	',
      },
      {
        id: 2,
        event_part_start_time: '2024-04-20 11:30:00+03:00',
        event_part_name: 'Кофе-брейк',
        event_part_description: 'Немого отдохнем',
      },
      {
        id: 3,
        event_part_start_time: '2024-04-20 12:00:00+03:00',
        event_part_name:
          'Реальный опыт тестирования безопасности веб-приложений',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 4,
        event_part_start_time: '2024-04-20 12:45:00+03:00',
        event_part_name: 'Тестирование безопасности веб-приложений: Будущее',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
    ],
  },
  {
    id: 9,
    name: 'Введение в Docker',
    first_speaker: {
      position: 'Главный инженер',
      speaker_name: 'Виктория Смирнова',
      company: 'Skolkovo',
      photo: './../src/assets/images/5photo.png',
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
    place: 'Владивосток',
    street: 'пер. Хлебный',
    event_parts: [
      {
        id: 0,
        event_part_start_time: '2024-04-20 10:00:00+03:00',
        event_part_name: 'Основы Docker',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 1,
        event_part_start_time: '2024-04-20 10:45:00+03:00	',
        event_part_name: '	Развёртывание приложений с Docker',
        event_part_description: 'Более подробно поговорим о теме доклада	',
      },
      {
        id: 2,
        event_part_start_time: '2024-04-20 11:30:00+03:00',
        event_part_name: 'Кофе-брейк',
        event_part_description: 'Немого отдохнем',
      },
      {
        id: 3,
        event_part_start_time: '2024-04-20 12:00:00+03:00',
        event_part_name: 'Управление контейнерами Docker',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
      {
        id: 4,
        event_part_start_time: '2024-04-20 12:45:00+03:00',
        event_part_name: 'Развёртывание приложений с Docker',
        event_part_description: 'Более подробно поговорим о теме доклада',
      },
    ],
  },
];
