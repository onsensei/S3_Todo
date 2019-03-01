import todo from './todo.saga';
import {fork} from 'redux-saga/effects';

export default function* sagas () {
  yield fork(todo);
}
