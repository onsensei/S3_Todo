import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Todo.style';
import Todo from '../../components/Todo/Todo.component';
import {connect} from 'react-redux';
import {get} from 'lodash';
import {View} from 'react-native';

class TodoPage extends Component {
  render () {
    const {navigation} = this.props;
    const todoItem = get(navigation, 'state.params.todoItem', null);
    const todoMode = get(navigation, 'state.params.todoMode', null);
    const todoItemData = todoMode === 'edit' ? todoItem : null;
    return (
      <View style={styles.container}>
        <Todo style={styles.todoContainer}
          todoItemData={todoItemData}
        />
      </View>
    );
  }
}

TodoPage.propTypes = {
  navigation: PropTypes.object
};

TodoPage.defaultProps = {
  navigation: null
};

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = () => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
