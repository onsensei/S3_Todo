import replaceIndex from 'replace-array-index';
import Toast from 'react-native-simple-toast';
import uuidv1 from 'uuid/v1';
import {get} from 'lodash';
import {getSelector} from '../../utils/Common.util';
import {put, select, takeLatest} from 'redux-saga/effects';
import * as actions from '../../redux/actions/index.action';

const todoSelector = getSelector('todo');

export function* insertTodoHandler (action) {
  const newTodo = action.payload;
  if (!newTodo) {
    return;
  }

  const todoStoreState = yield select(todoSelector);
  const newTodoList = [...todoStoreState.todoList, newTodo];
  yield put(actions.populateTodoListAction(newTodoList));
}

export function* updateTodoHandler (action) {
  const editedTodo = action.payload;
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

export function* saveTodoHandler (action) {
  const todoMode = get(action.payload, 'navigation.state.params.todoMode', null);

  const todoStoreState = yield select(todoSelector);
  const title = get(todoStoreState, 'editingTodo.title', null);
  const description = get(todoStoreState, 'editingTodo.description', null);
  const date = get(todoStoreState, 'editingTodo.date', null);

  if (!title) {
    Toast.show('Please enter title.');
    return;
  }

  if (todoMode === 'add') {
    const newTodo = {
      taskId: uuidv1(),
      title,
      description,
      date,
      isDone: false
    };
    yield put(actions.insertTodoAction(newTodo));
  } else if (todoMode === 'edit') {
    const editingTaskId = get(todoStoreState, 'editingTodo.taskId', null);
    const foundTodo = todoStoreState.todoList.find((todo) => todo.taskId === editingTaskId);
    if (foundTodo) {
      const newTodo = {
        ...foundTodo,
        title,
        description,
        date
      };
      yield put(actions.updateTodoAction(newTodo));
    }
  }

  const navigation = get(action.payload, 'navigation', null);
  if (navigation) {
    navigation.dismiss();
  }
}

// ----------

function* todoSaga () {
  yield takeLatest(actions.INSERT_TODO, insertTodoHandler);
  yield takeLatest(actions.UPDATE_TODO, updateTodoHandler);
  yield takeLatest(actions.SAVE_TODO, saveTodoHandler);
}

export default todoSaga;
