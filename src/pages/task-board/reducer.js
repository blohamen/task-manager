import { handleActions } from 'redux-actions';
import { ADD_COLUMN_SUCCESS, ADD_TASK_SUCCESS } from './actions';
import { FETCH_BOARDS, FETCH_BOARDS_SUCCESS, SELECT_BOARD } from '../boards-list/actions';

const mock = {
    boardsList: [
        {
            id: '228',
            title: 'Ilya Board',
            priorities: [
                'Minor',
                'Medium',
                'Major',
                'Critical',
            ],
            tasks: [
                {
                    id: '1',
                    name: 'Minor Priority',
                    priority: 'Minor',
                    assignedTo: 'Ilya Staver',
                    reporter: 'Ilya Staver',
                    reporterId: '1',
                    assignedToId: '1',
                    description: 'LALALLALALALALLALALALLALALALALLALALALLALALALALLA',
                },
                {
                    id: '2',
                    name: 'Major Priority',
                    priority: 'Major',
                    assignedTo: 'Ilya Staver',
                    reporter: 'Ilya Staver',
                    reporterId: '1',
                    assignedToId: '1',
                    description: 'LALALLALALALALLA',
                },
                {
                    id: '3',
                    name: 'Medium Priority',
                    priority: 'Medium',
                    assignedTo: 'Ilya Staver',
                    reporter: 'Ilya Staver',
                    reporterId: '1',
                    assignedToId: '1',
                    description: 'LALALLALALALALLA',
                },
            ],
        },
    ],
};

const initialState = {
    isFetching: false,
    boardsList: mock.boardsList,
    selectedBoardId: '228',
};

const addPropertyToBoard = (board, property, path) => {
    board[path].push(property);
    return board;
};

const updateBoard = (boardsList, boardId, payload) => boardsList
    .map((board) => (boardId === board.id
        ? payload
        : board));

export default handleActions({
    [FETCH_BOARDS]: (state) => ({
        ...state,
        isFetching: true,
    }),
    [FETCH_BOARDS_SUCCESS]: (state, { payload }) => ({
        ...state,
        isFetching: false,
        boardsList: mock.boardsList,
    }),
    [SELECT_BOARD]: (state, { payload }) => ({
        ...state,
        selectedBoardId: payload,
    }),
    [ADD_TASK_SUCCESS]: (state, { payload }) => ({
        ...state,
        boardsList: updateBoard(
            state.boardsList,
            state.selectedBoardId,
            addPropertyToBoard(
                state.boardsList.find((board) => state.selectedBoardId === board.id),
                payload,
                'tasks',
            ),
        ),
    }),
    [ADD_COLUMN_SUCCESS]: (state, { payload }) => ({
        ...state,
        boardsList: updateBoard(
            state.boardsList,
            state.selectedBoardId,
            addPropertyToBoard(
                state.boardsList.find((board) => state.selectedBoardId === board.id),
                payload,
                'priorities',
            ),
        ),
    }),
}, initialState);
