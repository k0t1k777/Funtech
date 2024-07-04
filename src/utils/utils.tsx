// export const BASE_URL = 'https://hackathon-funtech.sytes.net/api/v1';
// export const TOKEN = '';


// const getResponseData = (res: Response) => {
//   if (!res.ok) {
//     return Promise.reject(`Ошибка: ${res.status}`);
//   }
//   return res.json();
// };

// const headers = {
//   authorization: `Token ${TOKEN}`,
//   Accept: 'application/json',
//   'Content-Type': 'application/json',
// };

// export const getEvents = () => {
//   return fetch(`${BASE_URL}/events/`, {
//     headers,
//     method: 'GET',
//   }).then(getResponseData);
// };

// export const getPersonalEvents = () => {
//   return fetch(`${BASE_URL}/events/three-recommended-events/`, {
//     headers,
//     method: 'GET',
//   }).then(getResponseData);
// };

// export const getEvent = (id: string | undefined) => {
//   return fetch(`${BASE_URL}/events/${id}/`, {
//     headers,
//     method: 'GET',
//   }).then(getResponseData);
// };

// export const getCities = () => {
//   return fetch(`${BASE_URL}/cities/`, {
//     headers,
//     method: 'GET',
//   }).then(getResponseData);
// };

// export const getSpecializations = () => {
//   return fetch(`${BASE_URL}/specializations/`, {
//     headers,
//     method: 'GET',
//   }).then(getResponseData);
// };

// export const postEvent = (event: object) => {
//   return fetch(`${BASE_URL}/applications/`, {
//     method: 'POST',
//     headers,
//     body: JSON.stringify(event),
//   }).then(getResponseData);
// };

// export const registration = ({
//   firstName,
//   secondName,
//   email, 
//   phone,
// }: {
//   firstName: string;
//   secondName: string;
//   email: string;
//   phone: string;
// }) => {
//   return fetch(`${BASE_URL}/users/`, {
//     method: 'POST',
//     headers: {
//       Accept: 'application/json',
//       'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//       firstName,
//       secondName,
//       email,
//       phone,
//     }),
//   }).then(getResponseData);
// };

