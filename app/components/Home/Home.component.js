import PropTypes from 'prop-types';
import React, {Component} from 'react';
import styles from './Home.style';
import Touchable from 'react-native-platform-touchable';
import {FlatList, Text, View} from 'react-native';
import {noop} from 'lodash';

export default class Home extends Component {
  // eslint-disable-next-line
  _keyExtractor = (item, index) => `${item.taskId}`;

  _onPressItem = (item) => () => {
    const {onPressTodoItem} = this.props;
    onPressTodoItem(item);
  };

  _renderItem = ({item}) => (
    <Touchable style={styles.listItemContainer}
      onPress={this._onPressItem(item)}
      foreground={Touchable.Ripple('#666666')}
    >
      <View>
        <Text>
          {item.title}
        </Text>
      </View>
    </Touchable>
  );

  _ItemSeparatorComponent = () => (
    <View style={styles.listItemSeparator}/>
  )

  render () {
    const {todoListData} = this.props;
    return (
      <View style={styles.container}>
        <FlatList style={styles.listContainer}
          data={todoListData}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
          ItemSeparatorComponent={this._ItemSeparatorComponent}
        />
      </View>
    );
  }
}

Home.propTypes = {
  todoListData: PropTypes.array,
  onPressTodoItem: PropTypes.func
};

Home.defaultProps = {
  onPressTodoItem: noop
};
