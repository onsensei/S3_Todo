import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Todo.style';
import Todo from '../../components/Todo/Todo.component';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {get, noop} from 'lodash';
import {View} from 'react-native';
import * as actions from '../../redux/actions/index.action';

class TodoPage extends Component {
  _onTodoDataChange = (todo) => {
    const {populateEditingTodoDispatcher} = this.props;
    populateEditingTodoDispatcher(todo);
  }

  componentDidMount () {
    const {navigation, populateEditingTodoDispatcher} = this.props;
    const todoItem = get(navigation, 'state.params.todoItem', null);
    const todoMode = get(navigation, 'state.params.todoMode', null);
    const todoItemData = todoMode === 'edit' ? todoItem : null;
    populateEditingTodoDispatcher(todoItemData);
  }

  render () {
    const {navigation} = this.props;
    const todoItem = get(navigation, 'state.params.todoItem', null);
    const todoMode = get(navigation, 'state.params.todoMode', null);
    const todoItemData = todoMode === 'edit' ? todoItem : null;
    return (
      <View style={styles.container}>
        <Todo style={styles.todoContainer}
          todoItemData={todoItemData}
          onTodoDataChange={this._onTodoDataChange}
        />
      </View>
    );
  }
}

TodoPage.propTypes = {
  navigation: PropTypes.object,
  populateEditingTodoDispatcher: PropTypes.func
};

TodoPage.defaultProps = {
  navigation: null,
  populateEditingTodoDispatcher: noop
};

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = (dispatch) => ({
  populateEditingTodoDispatcher: bindActionCreators(actions.populateEditingTodoAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
