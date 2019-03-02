import React, {Component} from 'react';
import styles from './TodoDetail.style';
import TodoDetail from '../../components/TodoDetail/TodoDetail.component';
import {connect} from 'react-redux';
import {View} from 'react-native';

class TodoDetailPage extends Component {
  render () {
    return (
      <View>
        <TodoDetail style={styles.container}/>
      </View>
    );
  }
}

TodoDetailPage.propTypes = {
  //
};

TodoDetailPage.defaultProps = {
  //
};

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = () => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(TodoDetailPage);
