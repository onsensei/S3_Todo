import React from 'react';
import Todo from '../pages/Todo/Todo.page';
import {Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import * as actions from '../redux/actions/index.action';

export const routeNames = {
  Todo: 'Todo'
};

// ----------

const getTodoNavOpt = ({navigation}) => {
  const onPressSaveTodoButton = () => {
    // const payload = {
    //   navigation,
    //   paramX: XXX
    // };
    // navigation.dispatch(actions.Action(payload));
  };

  const saveTodoButton = ( // eslint-disable-next-line
    <Button title={'save'} onPress={onPressSaveTodoButton}/>
  );

  return {
    title: 'Todo',
    headerRight: saveTodoButton
  };
};

const TodoNavigator = createStackNavigator({
  [routeNames.Todo]: {
    screen: Todo,
    navigationOptions: getTodoNavOpt
  }
});

export default TodoNavigator;
