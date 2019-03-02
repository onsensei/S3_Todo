import Home from '../pages/Home/Home.page';
import React from 'react';
import TodoDetail from '../pages/TodoDetail/TodoDetail.page';
import {Button} from 'react-native';
import {createStackNavigator, NavigationActions} from 'react-navigation';
import {routeNames as rootRouteNames} from './index';

export const routeNames = {
  Home: 'Home',
  TodoDetail: 'TodoDetail'
};

// ----------

const getHomeNavOpt = ({navigation}) => {
  const onPressAddTodoButton = () => {
    const params = {
      ...navigation.state.params,
      todoMode: 'add'
    };
    navigation.dispatch(NavigationActions.navigate({routeName: rootRouteNames.Todo, params}));
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
    const params = {
      ...navigation.state.params,
      todoMode: 'edit'
    };
    navigation.dispatch(NavigationActions.navigate({routeName: rootRouteNames.Todo, params}));
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
