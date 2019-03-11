import axios from 'axios';

const ajax = axios.create({
  headers: {
    'content-type': 'application/json',
  },
});

export default {
  // Gets all music catalog
  getCatalog: function() {
    return ajax.get('/api/v1.0/music');
  },

  // Filters catalog based on user input
  getFilteredCatalog: function(filterCondition) {
    return ajax.get('/api/v1.0/filteredMusic', {
      params: { q: filterCondition },
    });
  },
};
