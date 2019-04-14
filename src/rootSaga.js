import { takeLatest, put, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { SIGN_IN, signInSuccess } from './components/sign-in/actions';
import {
  ADD_COLUMN,
  ADD_TASK,
  addColumnSuccess,
  addTaskSuccess,
} from './pages/task-board/actions';

function* handleSignIn({ payload: { email, password } }) {
  yield delay(3000);
  yield put(push('/board'));
  yield put(signInSuccess({
    token: '123',
  }));
}

function* handleAddTask({ payload }) {
  yield put(addTaskSuccess(payload));
}

function* handleAddColumn({ payload }) {
  yield put(addColumnSuccess(payload));
}

export default function* rootSaga() {
  yield takeLatest(SIGN_IN, handleSignIn);
  yield takeLatest(ADD_TASK, handleAddTask);
  yield takeLatest(ADD_COLUMN, handleAddColumn);
}
