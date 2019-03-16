import { createBrowserHistory } from 'history';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import thunk from 'redux-thunk';
import { createLogger } from 'redux-logger';
// import { loadLibrary } from '../actions';
import createRootReducer from '../reducers';

const middleware = [];
const logger = createLogger();
middleware.push(thunk);
middleware.push(logger);
// const store = createStore(
//   reducers,
//   {},
//   composeWithDevTools(applyMiddleware(...middleware))
// );
// // TODO: Should this really happen here?
// store.dispatch(loadLibrary());

// export default store;
export const history = createBrowserHistory();

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(history),
    preloadedState,
    composeWithDevTools(
      applyMiddleware(routerMiddleware(history), ...middleware)
    )
  );

  return store;
}
