import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { loadLibrary } from '../actions';
import reducers from '../reducers';

const middleware = [];

middleware.push(thunk);

const logger = createLogger();
middleware.push(logger);

const store = createStore(
  reducers,
  composeWithDevTools(applyMiddleware(...middleware))
);
// TODO: Should this really happen here?
store.dispatch(loadLibrary());

export default store;
