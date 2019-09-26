import { createAction } from 'redux-actions';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';

export const signIn = createAction(SIGN_IN);
export const signInSuccess = createAction(SIGN_IN_SUCCESS);
