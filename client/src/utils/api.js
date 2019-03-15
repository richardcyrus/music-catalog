import axios from 'axios';

const ajax = axios.create({
  headers: {
    'Content-type': 'application/json',
  },
  baseURL: '/api/v1.0/',
});

export default {
  listMusic: function() {
    return ajax.get('/library');
  },
  // filtered music_sheet
  search: function(filterCondition) {
    return ajax.get('/library/filteredMusic', {
      params: { q: filterCondition },
    });
  },

  // Still in Development*************************************
  // filtered music_sheet by composer
  search: function() {
    return ajax.get('/library/filteredMusicbyComposer');
  },
};
