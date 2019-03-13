import axios from 'axios';

const ajax = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: '/api/v1.0/',
  responseType: 'json',
});

export default {
  listMusic: function() {
    return ajax.get('/library');
  },
};
