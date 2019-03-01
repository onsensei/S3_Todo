import createSagaMiddleware from 'redux-saga';
import rootReducer from './reducers/index.reducer';
import Router from '../routes/index';
import saga from './sagas/index.saga';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {createNavigationReducer, createReactNavigationReduxMiddleware} from 'react-navigation-redux-helpers';
// import * as actions from './actions/index.action';

// Initial application reducer
const reducer = combineReducers({
  nav: createNavigationReducer(Router),
  ...rootReducer
});

// middleware
const sagaMiddleware = createSagaMiddleware();
const navigationMiddleware = createReactNavigationReduxMiddleware(
  'root',
  (state) => state.nav,
);
const defaultMiddleware = () => (next) => (action) => {
  // if (action.type === actions.TEMP_XXX_ACTION) {
  //   action.payload = 'temp xxx';
  // }

  next(action);
};

const composeEnhancer = global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ? global.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({}) : compose;
const composedEnhancer = composeEnhancer(applyMiddleware(sagaMiddleware, navigationMiddleware, defaultMiddleware));

// store
export const initStore = () => {
  const store = createStore(reducer, {}, composedEnhancer);
  sagaMiddleware.run(saga);
  return store;
};
