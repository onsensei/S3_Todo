import {createAction} from 'redux-actions';

// action = type + payload

// -----------
// action type
// -----------

export const POPULATE_TODO_LIST = 'POPULATE_TODO_LIST';
export const INSERT_TODO = 'INSERT_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';

// --------------
// action creator
// --------------

export const populateTodoListAction = createAction(POPULATE_TODO_LIST);
export const insertTodoAction = createAction(INSERT_TODO);
export const updateTodoAction = createAction(UPDATE_TODO);
