export const BASE_URL = 'https://hackathon-funtech.sytes.net/api/v1';

const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

export const getEvents = () => {
  return fetch(`${BASE_URL}/events/`, {
    method: 'GET',
  }).then(getResponseData);
};

export const getPersonalEvents = () => {
  return fetch(`${BASE_URL}/events/three-recommended-events/`, {
    method: 'GET',
  }).then(getResponseData);
};

export const getEvent = (id: string | undefined) => {
  return fetch(`${BASE_URL}/events/${id}/`, {
    method: 'GET',
  }).then(getResponseData);
};

export const getCities = () => {
  return fetch(`${BASE_URL}/cities/`, {
    method: 'GET',
  }).then(getResponseData);
};

// export const postChat = () => {
//   return fetch(`${BASE_URL}/api/v1/chat/`, {
//     method: 'POST',
//   }).then(getResponseData);
// };

// export const getChat = (id: string) => {
//   return fetch(`${BASE_URL}/api/v1/chat/${id}/`, {
//     method: 'GET',
//   }).then(getResponseData);
// };

// export const getDialog = (chat_uuid: string) => {
//   return fetch(`${BASE_URL}/api/v1/chat/${chat_uuid}/dialog/`, {
//     method: 'GET',
//   }).then(getResponseData);
// };

// export const postDialog = (chat_uuid: string) => {
//   return fetch(`${BASE_URL}/api/v1/chat/${chat_uuid}/dialog/`, {
//     method: 'POST',
//   }).then(getResponseData);
// };
