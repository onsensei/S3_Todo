import React, {Component} from 'react';
import styles from './Home.style';
import {View} from 'react-native';

export default class Home extends Component {
  render () {
    return (
      <View style={styles.container}/>
    );
  }
}

Home.propTypes = {
  //
};

Home.defaultProps = {
  //
};
