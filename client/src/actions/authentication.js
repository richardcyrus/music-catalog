import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from './types';
import Api from '../utils/api';
import jwt_decode from 'jwt-decode';
import { alertError } from './alert';

export function loginRequest(user) {
  return { type: LOGIN_REQUEST, user };
}

export function loginSuccess(user) {
  return { type: LOGIN_SUCCESS, user };
}

export function loginFailure(error) {
  return { type: LOGIN_FAILURE, error };
}

export function loginUser(user) {
  return function(dispatch) {
    dispatch(loginRequest(user));
    return Api.loginUser(user)
      .then((res) => {
        const { token } = res.data;
        localStorage.setItem('jwtToken', token);
        Api.setAuthToken(token);
        const user = jwt_decode(token);

        dispatch(loginSuccess(user));
      })
      .catch((err) => {
        console.dir(err);

        dispatch(loginFailure(err));
        dispatch(alertError(err));
      });
  };
}

export function logout() {
  localStorage.removeItem('jwtToken');
  return { type: LOGOUT };
}
