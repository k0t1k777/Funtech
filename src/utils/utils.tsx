export const BASE_URL = 'https://hackathon-funtech.sytes.net/api/v1';

const getResponseData = (res: Response) => {
  if (!res.ok) {
    return Promise.reject(`Ошибка: ${res.status}`);
  }
  return res.json();
};

const headers = {
  // authorization: `Bearer`,
  Accept: 'application/json',
  'Content-Type': 'application/json',
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

export const getSpecializations = () => {
  return fetch(`${BASE_URL}/specializations/`, {
    method: 'GET',
  }).then(getResponseData);
};

// export const postEvent = (event: object) => {
//   return fetch(`${BASE_URL}/events/`, {
//     method: 'POST',
//     body: JSON.stringify(event)
//   }).then(getResponseData);
// };

export const postEvent = (event: object) => {
  return fetch(`${BASE_URL}/applications/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(event),
  }).then(getResponseData);
};

export const getUserToken = (token: any) => {
  return fetch(`${BASE_URL}/users/`, {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
  }).then(getResponseData);
};

export const registration = ({
  firstName,
  secondName,
  email,
  phone,
}: {
  firstName: string;
  secondName: string;
  email: string;
  phone: string;
}) => {
  return fetch(`${BASE_URL}/users/`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      firstName,
      secondName,
      email,
      phone,
    }),
  }).then(getResponseData);
};

// login = ({ email, password }) => {
//   return fetch(`${this._url}/signin`, {
//     method: "POST",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//     },
//     body: JSON.stringify({
//       email,
//       password,
//     }),
//   }).then(this._checkResponse);
// };

// changeProfile = ({ name, email, token }) => {
//   return fetch(`${this._url}/users/me`, {
//     method: "PATCH",
//     headers: {
//       Accept: "application/json",
//       "Content-Type": "application/json",
//       Authorization: `Bearer ${token}`,
//     },
//     body: JSON.stringify({
//       name: name,
//       email: email,
//     }),
//   }).then(this._checkResponse);
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
