import { LOAD_LIBRARY_SUCCESS } from './types';
import Api from '../utils/api';

export function loadLibrary() {
  return function(dispatch) {
    return Api.listMusic()
      .then((res) => {
        const library = res.data.map((item) => {
          return {
            ...item,
            occasions: item.occasions.map((o) => o.name).join(', '),
            composers: item.composers.map((o) => o.name).join(', '),
            arrangers: item.arrangers.map((o) => o.name).join(', '),
            editors: item.editors.map((o) => o.name).join(', '),
            genres: item.genres.map((o) => o.name).join(', '),
            languages: item.languages.map((o) => o.language).join(', '),
            lyricists: item.lyricists.map((o) => o.name).join(', '),
            accompaniments: item.accompaniments.map((o) => o.name).join(', '),
          };
        });
        dispatch(loadLibrarySuccess(library));
      })
      .catch((error) => {
        throw error;
      });
  };
}

export function loadLibrarySuccess(library) {
  return { type: LOAD_LIBRARY_SUCCESS, library: library };
}
