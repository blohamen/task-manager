import { takeLatest, put, delay } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { SIGN_IN, signInSuccess } from './pages/sign-in/actions';
import {
  ADD_COLUMN,
  ADD_TASK,
  addColumnSuccess,
  addTaskSuccess,
} from './pages/task-board/actions';
import {FETCH_BOARDS, fetchBoardsSuccess, SELECT_BOARD} from "./pages/boards-list/actions";

function* handleSignIn({ payload: { email, password } }) {
  yield delay(3000);
  yield put(signInSuccess({
    token: '123',
  }));
  yield put(push('/list'));
}

function* handleAddTask({ payload }) {
  yield put(addTaskSuccess(payload));
}

function* handleAddColumn({ payload }) {
  yield put(addColumnSuccess(payload));
}

function* handleFetchBoards({payload}) {
  yield delay(3000);
  yield put(fetchBoardsSuccess());
}

function* handleSelectBoard() {
  yield put(push('/board'));
}

export default function* rootSaga() {
  yield takeLatest(SIGN_IN, handleSignIn);
  yield takeLatest(ADD_TASK, handleAddTask);
  yield takeLatest(ADD_COLUMN, handleAddColumn);
  yield takeLatest(FETCH_BOARDS, handleFetchBoards);
  yield takeLatest(SELECT_BOARD, handleSelectBoard);
}
