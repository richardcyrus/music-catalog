import { combineReducers } from 'redux';
import LibraryReducer from './library';

// The keys are the property of state that's produced.
export default combineReducers({
  library: LibraryReducer,
});
