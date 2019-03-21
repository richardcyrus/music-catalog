import axios from 'axios';

const ajax = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: '/api/v1.0/',
});

export default {
  // all sheet_music
  listMusic: function(pageSize, page) {
    return ajax.get('/library', { params: { pageSize, page } });
  },
  // filtered sheet_music
  search: function(pageSize, page, filterCondition) {
    return ajax.get('/library/filteredMusic', {
      params: { pageSize, page, filterCondition },
    });
  },
};
