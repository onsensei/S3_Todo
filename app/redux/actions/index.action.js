import {createAction} from 'redux-actions';

// action = type + payload

// -----------
// action type
// -----------

export const POPULATE_NOTES_ACTION = 'POPULATE_NOTES_ACTION';
export const INSERT_NOTE_ACTION = 'INSERT_NOTE_ACTION';
export const UPDATE_NOTE_ACTION = 'UPDATE_NOTE_ACTION';

// --------------
// action creator
// --------------

export const populateNotesAction = createAction(POPULATE_NOTES_ACTION);
export const insertNoteAction = createAction(INSERT_NOTE_ACTION);
export const updateNoteAction = createAction(UPDATE_NOTE_ACTION);
