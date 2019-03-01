import Home from '../pages/Home/Home.page';
import {createAppContainer, createStackNavigator} from 'react-navigation';

const RootNavigator = createStackNavigator({
  Home: {
    screen: Home
  }
});

export default createAppContainer(RootNavigator);
