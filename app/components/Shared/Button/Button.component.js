import ButtonStyles from './Button.style';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PropTypes from 'prop-types';
import React, {Component} from 'react';
import Touchable from 'react-native-platform-touchable';
import {noop} from 'lodash';
import {Text, View} from 'react-native';

class Button extends Component {

  render () {
    const {style, wrapperStyle, iconStyle, textStyle, rippleColor, iconName, text, disabled, onPress, onLayout} = this.props;

    let containerStyle = [ButtonStyles.container, style];
    containerStyle = disabled ? [...containerStyle, ButtonStyles.disabled] : containerStyle;

    const fgRippleColor = rippleColor ? rippleColor : '#888888';

    return (
      <Touchable style={containerStyle}
        disabled={disabled}
        onPress={disabled ? noop : onPress}
        foreground={Touchable.Ripple(fgRippleColor)}
      >
        <View style={[ButtonStyles.wrapper, wrapperStyle]} onLayout={onLayout}>
          {
            iconName ? <Icon style={[ButtonStyles.icon, iconStyle]} name={iconName}/> : null
          }
          <Text style={[ButtonStyles.text, textStyle]}>
            {text}
          </Text>
        </View>
      </Touchable>
    );
  }
}

Button.defaultProps = {
  style: {},
  wrapperStyle: {},
  iconStyle: {},
  textStyle: {},

  rippleColor: null,

  iconName: null,
  text: '',
  disabled: false,

  onPress: noop,
  onLayout: noop
};

Button.propTypes = {
  style: PropTypes.object,
  wrapperStyle: PropTypes.object,
  iconStyle: PropTypes.object,
  textStyle: PropTypes.object,

  rippleColor: PropTypes.string,

  iconName: PropTypes.string,
  text: PropTypes.string,
  disabled: PropTypes.bool,

  onPress: PropTypes.func,
  onLayout: PropTypes.func
};

export default Button;
