import HomeRoute from './Home.route';
import TodoRoute from './Todo.route';
import {createAppContainer, createStackNavigator} from 'react-navigation';

export const routeNames = {
  Home: 'Home',
  Todo: 'Todo'
};

// ----------

const config = {
  mode: 'modal',
  headerMode: 'none'
};

const RootNavigator = createStackNavigator({
  [routeNames.Home]: {
    screen: HomeRoute
  },
  [routeNames.Todo]: {
    screen: TodoRoute
  }
}, config);

export default createAppContainer(RootNavigator);
