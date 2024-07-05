import { MONTH_NAMES_DATA } from 'src/utils/constants';

const getDate = (startTime: string, endTime: string | null) => {
  const startDate = new Date(startTime);

  if (endTime) {
    const endDate = new Date(endTime);

    if (startDate.getMonth() === endDate.getMonth()) {
      if (startDate.getDate() === endDate.getDate()) {
        return `${startDate.getDate()} ${
          MONTH_NAMES_DATA[startDate.getMonth()]
        }`;
      }

      return `${startDate.getDate()} - ${endDate.getDate()} ${
        MONTH_NAMES_DATA[startDate.getMonth()]
      }`;
    }

    return `${startDate.getDate()} ${
      MONTH_NAMES_DATA[startDate.getMonth()]
    } - ${endDate.getDate()} ${MONTH_NAMES_DATA[endDate.getMonth()]}`;
  }

  return `${startDate.getDate()} ${MONTH_NAMES_DATA[startDate.getMonth()]}`;
};

const getFullDate = (startTime: string) => {
  const date = new Date(startTime);
  return `${date.getDate()} ${
    MONTH_NAMES_DATA[date.getMonth()]
  } ${date.getFullYear()} в ${date.getHours()}:${
    !date.getMinutes() ? '00' : date.getMinutes()
  }`;
};

const getStartTime = (startTime: string) => {
  const date = new Date(startTime);

  return `${date.getHours()}:${!date.getMinutes() ? '00' : date.getMinutes()}`;
};

export { getDate, getFullDate, getStartTime };
