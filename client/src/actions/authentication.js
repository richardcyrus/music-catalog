import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS, LOGOUT } from './types';
import Api from '../utils/api';
import jwt_decode from 'jwt-decode';
import { push } from 'connected-react-router';

export function loginRequest(user) {
  return { type: LOGIN_REQUEST, user };
}

export function loginSuccess(token) {
  localStorage.setItem('token', token);
  Api.setAuthToken(token);
  return { type: LOGIN_SUCCESS, token };
}

export function loginFailure(error) {
  localStorage.removeItem('token');
  return {
    type: LOGIN_FAILURE,
    error: {
      status: error.response.status,
      statusText: error.response.statusText,
    },
  };
}

export function logout() {
  localStorage.removeItem('jwtToken');
  return { type: LOGOUT };
}

export function logoutAndRedirect() {
  return (dispatch) => {
    dispatch(logout());
    dispatch(push('/login'));
  };
}

export function loginUser(user, redirect = '/library') {
  return function(dispatch) {
    dispatch(loginRequest(user));
    return Api.loginUser(user)
      .then((res) => {
        try {
          const { token } = res.data;
          // eslint-disable-next-line no-unused-vars
          let decode = jwt_decode(token);
          dispatch(loginSuccess(token));
          dispatch(push(redirect));
        } catch (e) {
          dispatch(
            loginFailure({
              response: {
                status: 403,
                statusText: 'Invalid Token',
              },
            })
          );
        }
      })
      .catch((err) => {
        dispatch(loginFailure(err));
      });
  };
}
