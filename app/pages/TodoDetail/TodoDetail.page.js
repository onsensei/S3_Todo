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
  _onPressMarkButton = () => {
    const {navigation, updateTodoDispatcher} = this.props;
    const todoItem = get(navigation, 'state.params.todoItem', null);
    const newTodoItem = {
      ...todoItem,
      isDone: !todoItem.isDone
    };
    updateTodoDispatcher(newTodoItem);
  }

  render () {
    const {navigation} = this.props;
    const todoItem = get(navigation, 'state.params.todoItem', null);
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
  updateTodoDispatcher: PropTypes.func
};

TodoDetailPage.defaultProps = {
  navigation: null,
  updateTodoDispatcher: noop
};

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = (dispatch) => ({
  updateTodoDispatcher: bindActionCreators(actions.updateTodoAction, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailPage);
