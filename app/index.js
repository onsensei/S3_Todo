import React, {Component} from 'react';
import Router from './routes/index';
import {connect, Provider} from 'react-redux';
import {initStore} from './redux/store';
import {reduxifyNavigator} from 'react-navigation-redux-helpers';

const AppContainer = reduxifyNavigator(Router, 'root');
const mapStateToProps = (state) => ({
  state: state.nav
});
const AppWithNavigationState = connect(mapStateToProps)(AppContainer);

const store = initStore();

class App extends Component {
  render () {
    return (
      <Provider store={store}>
        <AppWithNavigationState/>
      </Provider>
    );
  }
}

export default App;
