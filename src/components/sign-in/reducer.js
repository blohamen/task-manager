import { handleActions } from 'redux-actions';
import {SIGN_IN, SIGN_IN_SUCCESS} from "./actions";

const initialState = {
    token: null,
    isLoginRequired: true,
    isInProgress: false,
};

export const appReducer = handleActions({
    [SIGN_IN]: state => ({
        ...state,
        isInProgress: true,
    }),
    [SIGN_IN_SUCCESS]: (state, { payload }) => ({
        ...state,
        token: payload.token,
        isInProgress: false,
        isLoginRequired: false,
    })
}, initialState);