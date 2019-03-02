import React, {Component} from 'react';
import styles from './Todo.style';
import {View} from 'react-native';

export default class Todo extends Component {
  render () {
    return (
      <View style={styles.container}/>
    );
  }
}

Todo.propTypes = {
  //
};

Todo.defaultProps = {
  //
};
