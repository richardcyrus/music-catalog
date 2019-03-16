import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import LibraryReducer from './library';
import authReducer from './authentication';

// The keys are the property of state that's produced.
export default (history) =>
  combineReducers({
    router: connectRouter(history),
    library: LibraryReducer,
    authentication: authReducer,
  });
