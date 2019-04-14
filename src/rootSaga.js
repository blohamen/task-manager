import { takeLatest, put, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router'
import {SIGN_IN, signInSuccess} from "./components/sign-in/actions";
import {ADD_TASK, addTaskSuccess} from "./pages/task-board/actions";

export default function* rootSaga () {
    yield takeLatest(SIGN_IN, handleSignIn);
    yield takeLatest(ADD_TASK, handleAddTask)
}

function* handleSignIn({payload:{ email, password }}) {
    yield delay(3000);
    yield put(push('/board'));
    yield put(signInSuccess({
       token: '123',
    }));
}

function* handleAddTask({payload}) {
    console.warn(payload);
    yield put(addTaskSuccess(payload));
}