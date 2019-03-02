import Home from '../../components/Home/Home.component';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Home.style';
import {connect} from 'react-redux';
import {get} from 'lodash';
import {View} from 'react-native';

class HomePage extends Component {
  render () {
    const {todoListData} = this.props;
    return (
      <View style={styles.container}>
        <Home style={styles.homeContainer}
          todoListData={todoListData}
        />
      </View>
    );
  }
}

HomePage.propTypes = {
  todoListData: PropTypes.array
};

HomePage.defaultProps = {
  //
};

const mapStateToProps = (state) => ({
  todoListData: get(state, 'todo.todoList', [])
});

const mapDispatchToProps = () => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
