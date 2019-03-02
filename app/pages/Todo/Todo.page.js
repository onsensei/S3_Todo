import React, {Component} from 'react';
import styles from './Todo.style';
import Todo from '../../components/Todo/Todo.component';
import {connect} from 'react-redux';
import {View} from 'react-native';

class TodoPage extends Component {
  render () {
    return (
      <View>
        <Todo style={styles.container}/>
      </View>
    );
  }
}

TodoPage.propTypes = {
  //
};

TodoPage.defaultProps = {
  //
};

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = () => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoPage);
