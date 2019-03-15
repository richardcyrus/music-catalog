import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/types';

const initialState = {
  isAuthenticated: !localStorage.getItem('jwtToken'),
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        loginInProcess: true,
        user: action.user,
      });
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        loginInProcess: false,
        isAuthenticated: true,
        user: action.user,
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        loginInProcess: false,
        isAuthenticated: false,
        error: action.message,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        loginInProcess: false,
        isAuthenticated: false,
      });
    default:
      return state;
  }
};
