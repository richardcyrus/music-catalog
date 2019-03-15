import locationHelperBuilder from 'redux-auth-wrapper/history4/locationHelper';
import { connectedReduxRedirect } from 'redux-auth-wrapper/history4/redirect';
import connectedAuthWrapper from 'redux-auth-wrapper/connectedAuthWrapper';
import { push } from 'connected-react-router';

const locationHelper = locationHelperBuilder({});

const userIsAuthenticatedDefaults = {
  authenticatedSelector: (state) => state.authentication.isAuthenticated,
  authenticatingSelector: (state) => state.authentication.loginInProcess,
  wrapperDisplayName: 'UserIsAuthenticated',
};

const userIsNotAuthenticatedDefaults = {
  authenticatedSelector: (state) =>
    state.authentication.isAuthenticated === false,
  wrapperDisplayName: 'UserIsNotAuthenticated',
};

export const userIsAuthenticated = connectedAuthWrapper(
  userIsAuthenticatedDefaults
);
export const userIsAuthenticatedRedirect = connectedReduxRedirect({
  ...userIsAuthenticatedDefaults,
  redirectPath: '/login',
});

export const userIsNotAuthenticated = connectedAuthWrapper(
  userIsNotAuthenticatedDefaults
);

export const userIsNotAuthenticatedRedirect = connectedReduxRedirect({
  ...userIsNotAuthenticatedDefaults,
  allowRedirectBack: false,
  redirectPath: (state, ownProps) =>
    locationHelper.getRedirectQueryParam(ownProps) || '/',
  redirectAction: (newLoc) => (dispatch) => {
    dispatch(push(newLoc));
  },
});
