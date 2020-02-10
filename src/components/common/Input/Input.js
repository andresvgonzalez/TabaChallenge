import React, { Component } from 'react';
import { View, TextInput } from 'react-native';
import PropTypes from 'prop-types'

import styles from './styles';

class Input extends Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const {
      placeholder,
      onChangeText,
      inputWidth,
      customStyles,
      inputValue,
      editable,
      defaultValue,
      password
    } = this.props;
    return (
      <View style={[ styles.container, customStyles, { width: inputWidth || '100%' } ]}>
        <TextInput
          autoCapitalize="none"
          autoCorrect={false}
          placeholder={placeholder}
          onChangeText={text => onChangeText(text)}
          value={inputValue}
          underlineColorAndroid="transparent"
          style={styles.inputStyle}
          editable={editable}
          defaultValue={defaultValue}
          secureTextEntry={password}
        />
      </View>
    );
  }
}

Input.propTypes = {
  editable: PropTypes.bool,
  password: PropTypes.bool
}

Input.defaultProps = {
  editable: true,
  password: false
}

export default Input;
