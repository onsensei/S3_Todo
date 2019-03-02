import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './TodoDetail.style';
import TodoDetail from '../../components/TodoDetail/TodoDetail.component';
import {connect} from 'react-redux';
import {get} from 'lodash';
import {View} from 'react-native';

class TodoDetailPage extends Component {
  render () {
    const {navigation} = this.props;
    const todoItem = get(navigation, 'state.params.todoItem', null);
    return (
      <View style={styles.container}>
        <TodoDetail style={styles.todoDetailContainer}
          todoItemData={todoItem}
        />
      </View>
    );
  }
}

TodoDetailPage.propTypes = {
  navigation: PropTypes.object
};

TodoDetailPage.defaultProps = {
  navigation: null
};

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = () => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailPage);
