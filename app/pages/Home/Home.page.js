import Home from '../../components/Home/Home.component';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Home.style';
import {connect} from 'react-redux';
import {get, noop} from 'lodash';
import {NavigationActions} from 'react-navigation';
import {routeNames} from '../../routes/Home.route.js';
import {View} from 'react-native';

class HomePage extends Component {
  _onPressTodoItem = (item) => {
    const {navigateToTodoDetailDispatcher} = this.props;
    const params = {
      todoItem: item
    };
    navigateToTodoDetailDispatcher(params)();
  }

  render () {
    const {todoListData} = this.props;
    return (
      <View style={styles.container}>
        <Home style={styles.homeContainer}
          todoListData={todoListData}
          onPressTodoItem={this._onPressTodoItem}
        />
      </View>
    );
  }
}

HomePage.propTypes = {
  todoListData: PropTypes.array,
  navigateToTodoDetailDispatcher: PropTypes.func
};

HomePage.defaultProps = {
  navigateToTodoDetailDispatcher: noop
};

const mapStateToProps = (state) => ({
  todoListData: get(state, 'todo.todoList', [])
});

const mapDispatchToProps = (dispatch) => ({
  navigateToTodoDetailDispatcher: (params) => () => {
    dispatch(NavigationActions.navigate({routeName: routeNames.TodoDetail, params}));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
