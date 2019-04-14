import { createAction } from 'redux-actions';

export const ADD_TASK = 'ADD_TASK';
export const ADD_TASK_SUCCESS = 'ADD_TASK_SUCCESS';
export const ADD_TASK_ERROR = 'ADD_TASK_ERROR';
export const ADD_COLUMN = 'ADD_COLUMN';
export const ADD_COLUMN_SUCCESS = 'ADD_COLUMN_SUCCESS';
export const ADD_COLUMN_ERROR = 'ADD_COLUMN_ERROR';

export const addTask = createAction(ADD_TASK);
export const addTaskSuccess = createAction(ADD_TASK_SUCCESS);
export const addTaskError = createAction(ADD_TASK_ERROR);
export const addColumn = createAction(ADD_COLUMN);
export const addColumnSuccess = createAction(ADD_COLUMN_SUCCESS);
export const addColumnError = createAction(ADD_COLUMN_ERROR);