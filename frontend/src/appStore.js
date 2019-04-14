import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import createRootReducer from './rootReducer';
import rootSaga from './rootSaga';

export const history = createBrowserHistory();
const sagaMiddleware = createSagaMiddleware();
export const store = createStore(
  createRootReducer(history),
  applyMiddleware(
    logger,
    sagaMiddleware,
    routerMiddleware(history),
  ),
);

sagaMiddleware.run(rootSaga);
