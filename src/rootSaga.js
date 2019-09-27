import { takeLatest, put } from 'redux-saga/effects';
import { push } from 'connected-react-router';
import { SIGN_IN, signInSuccess } from './pages/sign-in/store/actions';
import {
    ADD_COLUMN,
    ADD_TASK,
    addColumnSuccess,
    addTaskSuccess,
} from './pages/task-board/actions';
import { FETCH_BOARDS, fetchBoardsSuccess, SELECT_BOARD } from './pages/boards-list/actions';

// TODO: Divide into separates folders
function* handleSignIn({ payload: { email, password } }) {
    yield put(signInSuccess({
        email,
        password,
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

function* handleFetchBoards({ payload }) {
    yield put(fetchBoardsSuccess(payload));
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
