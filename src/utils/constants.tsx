import Calendar from 'src/assets/calendar.svg';
import Online from 'src/assets/Online.svg';

export const FILTER_DATA = {
  select: 'Город',
};

export const NEWS_DATA = [
  {
    img: Calendar,
    text: '12 апреля в 19:00',
  },
  {
    img: Online,
    text: 'Онлайн',
  },
];

export const NEWS_TEXT_DATA = {
  registration: 'Регистрация открыта',
  title: 'Инновационные тренды в UX/UI дизайне',
  name: 'София Новикова',
};

export const POSTER_DATA = {
  tags: ['Frontend', 'Ts', 'React'],
  registration: {
    open: 'Регистрация открыта',
    close: 'Регистрация закрыта',
    registered: 'Зарегистрирован',
  },
  buttonText: {
    notRegistered: 'Я иду!',
    registered: 'Отменить',
  },
};

export const CHECKBOX_DATA = {
  line: 'Направление',
  type: 'Тип',
};

export const CHECKBOX_DATA_CONST = ['MeetUp', 'Конференция', 'Вебинар', 'Воркшоп'];

export const POPUP_DATA = {
  agry: 'Заполняя форму, я даю согласие на обработку данных',
  data: 'Личные данные',
  notifications: 'Уведомления',
  event: 'Добавить мероприятие',
  aboutMe: 'Личные данные',
  aboutName: 'Имя',
  enter: 'Войти',
  registration: 'Регистрация',
  reg: 'Зарегестрироваться',
  enterYandex: 'Войти с Яндекс ID',
  user: 'Участник',
  download: 'WowLookAtThis.ppt',
};

export const ENTRY_DATA = {
  title: 'Запись подтверждена!',
  addReminderText: 'Добавить напоминание в календарь',
  done: 'Вы успешно зарегистрировались на ',
  continue: ' Подробности уже на вашей почте!',
};

export const NOTIFICATION_DATA = {
  title: 'Уведомления',
};

export const NOTIFICATION_FORM_DATA = {
  title: 'Уведомления',
  submitButton: {
    notification: 'Сохранить',
    entry: 'Ок',
  },
  cancelButton: 'Отменить',
  notificationText: {
    email: 'На почту',
    sms: 'СМС',
    telegram: 'Телеграм',
    call: 'Позвонить',
  },
  timeText: {
    perDay: 'За день',
    perHour: 'За час',
    perMinutes: 'За 15 минут',
  },
};

export const PERSONAL_DATA = {
  title: 'Личные данные',
  inputLabels: [
    'Имя',
    'Фамилия',
    'Дата рождения',
    'Город',
    'Email',
    'Телефон',
    'Телеграм',
  ],
  inputJobLabels: ['Компания', 'Должность', 'Опыт'],
  checkboxLabels: [
    'Frontend',
    'Backend',
    'UX/UI',
    'AI',
    'ML',
    'QA',
    'DevOps',
    'Аналитика',
    'HR',
    'Менеджмент',
  ],
  checkboxJobLabels: {
    working: 'Работаю',
    studying: 'Учусь',
    jobHunting: 'В поиске работы',
  },
  occupation: 'Род  деятельности*',
  direction: 'Направление',
  showAll: 'Показать все',
  submitButton: 'Сохранить',
  cancelButton: 'Отменить',
};

export const MAIN_DATA = {
  personalTitle: 'Персональная подборка',
  title: 'Афиша событий',
};

export const MONTH_NAMES_DATA = [
  'января',
  'февраля',
  'марта',
  'апреля',
  'мая',
  'июня',
  'июля',
  'августа',
  'сентября',
  'октября',
  'ноября',
  'декабря',
];

export const REGISTRATION_DATA = {
  link: 'Ссылка на трансляцию',
  registration: 'Ссылка на трансляцию',
  download: 'Скачать дополнительные материалы',
  regButton: 'Зарегистрироваться',
  cancelButton: 'Отменить',
};

export const PLACE_DATA = {
  mesto: 'Место',
};

export const COURSES_DATA = {
  text: 'Похожие',
};

export const SPEAKERS_DATA = {
  text: 'Спикер',
};

export const PLAN_DATA = {
  text: 'Программа',
};

export const INPUT_DATA = {
  name: 'Имя*',
  surname: 'Фамилия*',
  date: 'Дата рождения',
  email: 'Email*',
  phone: 'Телефон*',
  telegram: 'Телеграм',
  city: 'Город',
};

export const REG_ON_IVENT_DATA = {
  title: 'Регистрация на',
  inputJobLabels: {
    company: 'Компания*',
    position: 'Должность*',
    exp: 'Опыт*',
  },
  checkboxJobLabels: {
    working: 'Работаю',
    studying: 'Учусь',
    jobHunting: 'В поиске работы',
  },
  checkboxformatLabels: {
    online: 'Онлайн',
    offline: {
      notAvailable: 'Оффлайн мест нет',
      available: 'Оффлайн',
    },
  },
  format: 'Формат участия',
  occupation: 'Род  деятельности',
  direction: 'Направление',
  showAll: 'Показать все',
  submitButton: 'Сохранить',
  cancelButton: 'Отменить',
  legalText: 'Я даю свое согласие на обработку персональных данных',
  saveData: 'Сохранить мои данные  в личном кабинете',
};

export const CREATE_EVENT_DATA = {
  eventTopic: 'Тема события*',
  eventDescription: 'Описание события*',
  eventTypeText: 'Тип мероприятия*',
  eventTypes: ['Встреча', 'MeetUp', 'Конференция'],
  eventDirectionText: 'Направление*',
  eventDirections: [
    'Frontend',
    'Backend',
    'UX/UI',
    'AI',
    'QA',
    'ML',
    'Менеджмент',
    'Аналитика',
    'HR',
    'DevOps',
  ],
  date: 'Дата',
  time: 'Время',
  eventFormatText: 'Формат',
  eventFormats: ['Online', 'Offline', 'Hybrid'],
  seatsOffline: 'Мест, Офлайн',
  seatsOnline: 'Мест, Онлайн',
  cityText: 'Город',
  cities: ['Москва', 'Санкт-Петербург', 'Ростов-на-Дону'],
  linkOnTranslation: 'Ссылка на запись трансляции',
  place: 'Место проведения',
  promote: 'Продвигать с главной',
  fileWithAdditional: 'Файл с дополнительными материалами',
  submitButton: 'Сохранить',
  fillButton: 'Заполнить программу',
};

export const ERROR_DATA = {
  text: 'Ошибка, проверьте поле',
};

export const FOOTER_DATA = {
  text: '© 2005–2024 ООО «Яндекс»',
};

export const CHECKBOX_TIME_DATA = ['online', 'offline', 'hybrid'];

export const CHECKBOX_SCILLS_DATA = [
  'Frontend',
  'Backend',
  'ML',
  'QA',
  'UX/UI',
  'AI',
  'Менеджмент',
  'Аналитика',
  'DevOps',
];
