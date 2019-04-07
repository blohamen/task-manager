import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { appReducer } from "./components/sign-in/reducer";

export default (history) => combineReducers({
    app: appReducer,
    router: connectRouter(history)
});