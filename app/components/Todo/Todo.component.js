import DatePicker from 'react-native-datepicker';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Todo.style';
import {get, noop} from 'lodash';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {Text, TextInput, View} from 'react-native';

export default class Todo extends Component {
  constructor (props) {
    super(props);

    const {todoItemData} = this.props;
    this.state = {
      todoItemData
    };
  }

  _onChangeText = (key) => (text) => {
    if (key === 'title' || key === 'description') {
      const newTodoItemData = {
        ...this.state.todoItemData,
        [key]: text
      };
      const newState = {
        todoItemData: newTodoItemData
      };
      this.setState(newState);

      // ----------

      const {onTodoDataChange} = this.props;
      onTodoDataChange(newTodoItemData);
    }
  }

  _onDateChange = (date) => {
    const newTodoItemData = {
      ...this.state.todoItemData,
      date
    };
    const newState = {
      todoItemData: newTodoItemData
    };
    this.setState(newState);

    // ----------

    const {onTodoDataChange} = this.props;
    onTodoDataChange(newTodoItemData);
  }

  render () {
    const {todoItemData} = this.state;
    const title = get(todoItemData, 'title', '');
    const description = get(todoItemData, 'description', '');
    const date = get(todoItemData, 'date', '');
    return (
      <KeyboardAwareScrollView contentContainerStyle={styles.scrollContainer}
        enableOnAndroid={true}
      >
        <View style={styles.container}>
          <Text style={styles.textHeader}>{'Title'}</Text>
          <TextInput style={styles.singleLineTextInput}
            onChangeText={this._onChangeText('title')}
            value={title}
            placeholder={'Title'}
          />

          <Text style={styles.textHeader}>{'Description'}</Text>
          <TextInput style={styles.multiLineTextInput}
            onChangeText={this._onChangeText('description')}
            value={description}
            placeholder={'Description'}
            multiline={true}
          />

          <Text style={styles.textHeader}>{'Date'}</Text>
          <DatePicker style={styles.datePicker}
            date={date}
            mode='date'
            placeholder='Select Date'
            format='YYYY-MM-DD'
            confirmBtnText='Confirm'
            cancelBtnText='Cancel'
            customStyles={{
              dateIcon: styles.datePickerIcon,
              dateInput: styles.datePickerInput
            }}
            onDateChange={this._onDateChange}
          />
        </View>
      </KeyboardAwareScrollView>
    );
  }
}

Todo.propTypes = {
  todoItemData: PropTypes.object,
  onTodoDataChange: PropTypes.func
};

Todo.defaultProps = {
  todoItemData: null,
  onTodoDataChange: noop
};
