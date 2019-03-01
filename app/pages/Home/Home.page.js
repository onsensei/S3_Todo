import Home from '../../components/Home/Home.component';
import React, {Component} from 'react';
import styles from './Home.style';
import {connect} from 'react-redux';

class HomePage extends Component {
  render () {
    return (
      <Home style={styles.container}/>
    );
  }
}

HomePage.propTypes = {
  //
};

HomePage.defaultProps = {
  //
};

const mapStateToProps = () => ({
  //
});

const mapDispatchToProps = () => ({
  //
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
