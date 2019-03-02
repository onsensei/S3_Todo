import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './TodoDetail.style';
import {Button} from '../Shared/index';
import {noop} from 'lodash';
import {ScrollView, Text, View} from 'react-native';

export default class TodoDetail extends Component {
  _onPressMarkButton = () => {
    const {onPressMarkButton} = this.props;
    onPressMarkButton();
  }

  render () {
    const {todoItemData} = this.props;
    const statusText = todoItemData.isDone ? 'Done' : 'Pending';
    const markText = todoItemData.isDone ? 'Mark as pending' : 'Mark as done';
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
          <Text style={styles.textContent}>{statusText}</Text>

          <Button text={markText} onPress={this._onPressMarkButton}/>
        </View>
      </ScrollView>
    );
  }
}

TodoDetail.propTypes = {
  todoItemData: PropTypes.object,
  onPressMarkButton: PropTypes.func
};

TodoDetail.defaultProps = {
  todoItemData: null,
  onPressMarkButton: noop
};
