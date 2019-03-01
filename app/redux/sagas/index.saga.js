import temp from './temp.saga';
import {fork} from 'redux-saga/effects';

export default function* sagas () {
  yield fork(temp);
}
