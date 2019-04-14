import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { appReducer } from "./components/sign-in/reducer";
import { taskReducer } from "./pages/task-board/reducer";

export default (history) => combineReducers({
    app: appReducer,
    board: taskReducer,
    router: connectRouter(history)
});