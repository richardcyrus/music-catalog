import {
  LOGIN_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGOUT,
} from '../actions/types';
import jwtDecode from 'jwt-decode';

const initialState = {
  token: null,
  username: null,
  isAuthenticated: !!localStorage.getItem('token'),
  loginInProcess: false,
  statusText: null,
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
        token: action.token,
        username: jwtDecode(action.token).username,
        statusText: 'You have logged in successfully.',
      });
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        loginInProcess: false,
        isAuthenticated: false,
        token: null,
        username: null,
        statusText: `Authentication error: ${action.status} ${
          action.statusText
        }`,
      });
    case LOGOUT:
      return Object.assign({}, state, {
        loginInProcess: false,
        isAuthenticated: false,
        token: null,
        username: null,
        statusText: 'You have logged out successfully',
      });
    default:
      return state;
  }
};
