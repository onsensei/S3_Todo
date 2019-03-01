import replaceIndex from 'replace-array-index';
import {get} from 'lodash';
import {getSelector} from '../../utils/Common.util';
import {put, select, takeLatest} from 'redux-saga/effects';
import * as actions from '../../redux/actions/index.action';

const todoSelector = getSelector('todo');

export function* insertTodoHandler (payload) {
  const newTodo = payload;
  if (!newTodo) {
    return;
  }

  const todoStoreState = yield select(todoSelector);
  const newTodoList = [...todoStoreState.todoList, newTodo];
  yield put(actions.populateTodoListAction(newTodoList));
}

export function* updateTodoHandler (payload) {
  const editedTodo = payload;
  const editedTaskId = get(editedTodo, 'taskId', null);
  if (!editedTaskId) {
    return;
  }

  const todoStoreState = yield select(todoSelector);
  const foundIndex = todoStoreState.todoList.findIndex((todo) => todo.taskId === editedTaskId);
  if (foundIndex >= 0) {
    const newTodoList = replaceIndex(todoStoreState.todoList, foundIndex, editedTodo);
    yield put(actions.populateTodoListAction(newTodoList));
  }
}

// ----------

function* todoSaga () {
  yield takeLatest(actions.INSERT_TODO, insertTodoHandler);
  yield takeLatest(actions.UPDATE_TODO, updateTodoHandler);
}

export default todoSaga;
