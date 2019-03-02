import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './TodoDetail.style';
import TodoDetail from '../../components/TodoDetail/TodoDetail.component';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {get, noop} from 'lodash';
import {View} from 'react-native';
import * as actions from '../../redux/actions/index.action';

class TodoDetailPage extends Component {
  findMatchedTodoTaskId = (taskId, todo) => todo.taskId === taskId

  _onPressMarkButton = () => {
    const {navigation, todoListData, updateTodoDispatcher} = this.props;
    const taskId = get(navigation, 'state.params.todoItem.taskId', null);
    const todoItem = todoListData.find(this.findMatchedTodoTaskId.bind(this, taskId));
    const newTodoItem = {
      ...todoItem,
      isDone: !todoItem.isDone
    };
    updateTodoDispatcher(newTodoItem);
  }

  render () {
    const {navigation, todoListData} = this.props;
    const taskId = get(navigation, 'state.params.todoItem.taskId', null);
    const todoItem = todoListData.find(this.findMatchedTodoTaskId.bind(this, taskId));
    return (
      <View style={styles.container}>
        <TodoDetail style={styles.todoDetailContainer}
          todoItemData={todoItem}
          onPressMarkButton={this._onPressMarkButton}
        />
      </View>
    );
  }
}

TodoDetailPage.propTypes = {
  navigation: PropTypes.object,
  todoListData: PropTypes.array,
  updateTodoDispatcher: PropTypes.func
};

TodoDetailPage.defaultProps = {
  navigation: null,
  updateTodoDispatcher: noop
};

const mapStateToProps = (state) => ({
  todoListData: get(state, 'todo.todoList', [])
});

const mapDispatchToProps = (dispatch) => ({
  updateTodoDispatcher: bindActionCreators(actions.updateTodoAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailPage);
