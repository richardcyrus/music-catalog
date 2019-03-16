import { LOAD_LIBRARY_SUCCESS } from '../actions/types';
const initialState = {
  library: [],
};

export default (state = initialState.library, action) => {
  switch (action.type) {
    case LOAD_LIBRARY_SUCCESS:
      return Object.assign([], state, action.library);
    default:
      return state;
  }
};
