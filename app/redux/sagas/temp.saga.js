import {takeLatest} from 'redux-saga/effects';
import * as actions from '../../redux/actions/index.action';

export function* tempHandler () {
  //
}

// ----------

function* tempSaga () {
  yield takeLatest(actions.TEMP_ACTION, tempHandler);
}

export default tempSaga;
