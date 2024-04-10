import Calendar from './../../src/assets/calendar.svg';
import Online from './../assets/Online.svg';

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
  date: '3 апреля',
  title: '2+2=22. JavaScript',
  name: 'Роман Пушкин',
  profession: 'Senior Developer ECAM',
  tags: ['Frontend', 'Ts', 'React'],
  registration: {
    open: 'Регистрация открыта',
    close: 'Регистрация закрыта',
  },
  buttonText: 'Я иду!',
};

export const CHECKBOX_DATA = {
  line: 'Направление',
  type: 'Тип',
};

export const POPUP_DATA = {
  agry: 'Заполняя форму, я даю согласие на обработку данных',
  data: 'Личные данные',
  notifications: 'Уведомления',
  event: 'Добавить мероприятие',
  aboutMe: 'Личные данные',
  aboutName: 'Имя',
};

export const ENTRY_DATA = {
  title: 'Запись подтверждена!',
  addReminderText: 'Добавить напоминание в календарь',
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
