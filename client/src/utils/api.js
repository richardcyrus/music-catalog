import axios from 'axios';

const client = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: '/api/v1.0/',
  responseType: 'json',
});

export default {
  listMusic: function() {
    return client.get('/library');
  },
  loginUser: function(user) {
    return client.post('/user/login', user);
  },
  setAuthToken: function(token) {
    if (token) {
      client.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    } else {
      delete client.defaults.headers.common['Authorization'];
    }
  },
};
