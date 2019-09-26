import { createAction } from 'redux-actions';

export const SELECT_BOARD = 'SELECT_BOARD';
export const FETCH_BOARDS = 'FETCH_BOARDS';
export const FETCH_BOARDS_SUCCESS = 'FETCH_BOARDS_SUCCESS';
export const FETCH_BOARDS_ERROR = 'FETCH_BOARDS_ERROR';

export const selectBoard = createAction(SELECT_BOARD);
export const fetchBoards = createAction(FETCH_BOARDS);
export const fetchBoardsSuccess = createAction(FETCH_BOARDS_SUCCESS);
export const fetchBoardsError = createAction(FETCH_BOARDS_ERROR);
