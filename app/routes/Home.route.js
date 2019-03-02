import Home from '../pages/Home/Home.page';
import React from 'react';
import TodoDetail from '../pages/TodoDetail/TodoDetail.page';
import {Button} from 'react-native';
import {createStackNavigator} from 'react-navigation';
import * as actions from '../redux/actions/index.action';

export const routeNames = {
  Home: 'Home',
  TodoDetail: 'TodoDetail'
};

// ----------

const getHomeNavOpt = ({navigation}) => {
  const onPressAddTodoButton = () => {
    // const payload = {
    //   navigation,
    //   paramX: XXX
    // };
    // navigation.dispatch(actions.Action(payload));
  };

  const addTodoButton = ( // eslint-disable-next-line
    <Button title={'add'} onPress={onPressAddTodoButton}/>
  );

  return {
    title: 'Reminders',
    headerRight: addTodoButton
  };
};

const getTodoDetailNavOpt = ({navigation}) => {
  const onPressEditTodoButton = () => {
    // const payload = {
    //   navigation,
    //   paramX: XXX
    // };
    // navigation.dispatch(actions.Action(payload));
  };

  const editTodoButton = ( // eslint-disable-next-line
    <Button title={'edit'} onPress={onPressEditTodoButton}/>
  );

  return {
    title: 'Reminder Detail',
    headerRight: editTodoButton
  };
};

const HomeNavigator = createStackNavigator({
  [routeNames.Home]: {
    screen: Home,
    navigationOptions: getHomeNavOpt
  },
  [routeNames.TodoDetail]: {
    screen: TodoDetail,
    navigationOptions: getTodoDetailNavOpt
  }
});

export default HomeNavigator;
