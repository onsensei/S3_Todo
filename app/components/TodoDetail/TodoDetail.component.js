import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './TodoDetail.style';
import {ScrollView, Text, View} from 'react-native';

export default class TodoDetail extends Component {
  render () {
    const {todoItemData} = this.props;
    return (
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.container}>
          <Text style={styles.textHeader}>{'Task ID'}</Text>
          <Text style={styles.textContent}>{todoItemData.taskId}</Text>

          <Text style={styles.textHeader}>{'Title'}</Text>
          <Text style={styles.textContent}>{todoItemData.title}</Text>

          <Text style={styles.textHeader}>{'Description'}</Text>
          <Text style={styles.textContent}>{todoItemData.description}</Text>

          <Text style={styles.textHeader}>{'Date'}</Text>
          <Text style={styles.textContent}>{todoItemData.date}</Text>

          <Text style={styles.textHeader}>{'Status'}</Text>
          <Text style={styles.textContent}>{todoItemData.isDone ? 'Done' : 'Pending'}</Text>
        </View>
      </ScrollView>
    );
  }
}

TodoDetail.propTypes = {
  todoItemData: PropTypes.object
};

TodoDetail.defaultProps = {
  todoItemData: null
};
