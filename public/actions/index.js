import axios from 'axios';
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('userToken');

export const FETCH_CHANNELS = 'FETCH_CHANNELS';
export const FETCH_CHAT = 'FETCH_CHAT';
export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';

const ROOT_URL = '/api';

export function fetchChannels() {
  const request = axios.get(`${ROOT_URL}/channel`);

  return {
    type: FETCH_CHANNELS,
    payload: request
  };
}

export function fetchChat(id) {
  const request = axios.post(`${ROOT_URL}/channel/${id}`);

  return {
    type: FETCH_CHAT,
    payload: request
  };
}

export function fetchUsers() {
  const request = axios.get(`${ROOT_URL}/user`);

  return {
    type: FETCH_USERS,
    payload: request
  };
}

export function fetchUser(id) {
  const request = axios.get(`${ROOT_URL}/user/${id}`);

  return {
    type: FETCH_USER,
    payload: request
  };
}
