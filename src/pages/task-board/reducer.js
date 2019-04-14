import { handleActions } from 'redux-actions';
import { ADD_COLUMN_SUCCESS, ADD_TASK_SUCCESS } from './actions';

const initialState = {
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
};

export const taskReducer = handleActions({
  [ADD_TASK_SUCCESS]: (state, { payload }) => ({
    ...state,
    tasks: [
      ...state.tasks,
      payload,
    ],
  }),
  [ADD_COLUMN_SUCCESS]: (state, { payload }) => ({
    ...state,
    priorities: [
      ...state.priorities,
      payload,
    ],
  }),
}, initialState);
