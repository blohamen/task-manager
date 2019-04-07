import {takeLatest, put, delay} from 'redux-saga/effects';
import { push } from 'connected-react-router'
import {SIGN_IN, signInSuccess} from "./components/sign-in/actions";

export default function* rootSaga () {
    yield takeLatest(SIGN_IN, handleSignIn);
}

function* handleSignIn({payload:{ email, password }}) {
    console.log(email, password);
    yield delay(3000);
    yield put(push('/board'));
    yield put(signInSuccess({
       token: '123',
    }));
}