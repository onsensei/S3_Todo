import {createAction} from 'redux-actions';

// action = type + payload

// -----------
// action type
// -----------

export const TEMP_ACTION = 'TEMP_ACTION';

// --------------
// action creator
// --------------

export const tempAction = createAction(TEMP_ACTION);
