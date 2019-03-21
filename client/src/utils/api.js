import axios from 'axios';

const client = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: '/api/v1.0/',
  responseType: 'json',
});

export default {
  listLibrary: (query) => {
    return client.get('/library', { params: query });
  },
  addScore: (score) => {
    return client.post('/library', score);
  },
  getScore: (id) => {
    return client.get(`/library/${id}`);
  },
  listPerformances: (pageSize, page) => {
    return client.get('/performances', { params: { pageSize, page } });
  },
  addPerformance: (performance) => {
    return client.post('/performances', performance);
  },
  getPerformance: (id) => {
    return client.get(`/performances/${id}`);
  },
  listMembers: (pageSize, page) => {
    return client.get('/members', { params: { pageSize, page } });
  },
  addMember: (member) => {
    return client.post('/members', member);
  },
  getMember: (id) => {
    return client.get(`/members/${id}`);
  },
  listRoles: (pageSize, page) => {
    return client.get('/roles', { params: { pageSize, page } });
  },
  addRole: (role) => {
    return client.post('/roles', role);
  },
  getRole: (id) => {
    return client.get(`/roles/${id}`);
  },
  listUsers: (pageSize, page) => {
    return client.get('/users', { params: { pageSize, page } });
  },
  addUser: (user) => {
    return client.post('/users', user);
  },
  getUser: (id) => {
    return client.get(`/users/${id}`);
  },
  loginUser: (user) => {
    return client.post('/users/login', user);
  },
  setAuthToken: (token) => {
    if (token) {
      client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete client.defaults.headers.common['Authorization'];
    }
  },
};
