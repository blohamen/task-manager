import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { appReducer } from './pages/sign-in/reducer';
import boardsReducer from './pages/task-board/reducer';

export default history => combineReducers({
  app: appReducer,
  boards: boardsReducer,
  router: connectRouter(history),
});
