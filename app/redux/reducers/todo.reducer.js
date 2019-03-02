import {get} from 'lodash';
import * as actions from '../actions/index.action';

const initialState = {
  todoList: [
    {
      taskId: '653a8970-3cd0-11e9-a347-811821c3f423',
      title: 'title 01',
      description: 'description 01 description 01 description 01 description 01 description 01 description 01 description 01 description 01 description 01 description 01',
      date: '2019-01-15',
      isDone: true
    },
    {
      taskId: 'a4f19270-3cd0-11e9-a347-811821c3f423',
      title: 'title 02',
      description: 'description 02 description 02 description 02 description 02 description 02 description 02 description 02 description 02 description 02 description 02',
      date: '2019-02-15',
      isDone: false
    },
    {
      taskId: 'bf17e870-3cd0-11e9-a347-811821c3f423',
      title: 'title 03',
      description: 'description 03 description 03 description 03 description 03 description 03 description 03 description 03 description 03 description 03 description 03',
      date: '2019-03-15',
      isDone: false
    }
  ],
  editingTodo: null
};

const todo = (prevState = initialState, action) => {
  switch (action.type) {

  case actions.POPULATE_TODO_LIST: {
    const newTodoList = get(action, 'payload', []);
    const newState = {
      ...prevState,
      todoList: newTodoList
    };
    return newState;
  }

  case actions.POPULATE_EDITING_TODO: {
    const newEditingTodo = get(action, 'payload', null);
    const newState = {
      ...prevState,
      editingTodo: newEditingTodo
    };
    return newState;
  }

  default: return prevState;
  }
};

export default todo;
