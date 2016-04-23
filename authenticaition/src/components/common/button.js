'use strict';

import React, {
  View,
  Text,
  TouchableHighlight,
  StyleSheet
} from 'react-native' ;


module.exports = React.createClass({
  render(){
    return <TouchableHighlight style = {styles.button }
      underlayColor = {'skyblue'}
      onPress={this.props.onPress}
      >
      <Text style={styles.buttonText}>
        {this.props.text}
      </Text>
    </TouchableHighlight>

  }
});

var styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    borderColor: 'white',
    backgroundColor: 'white'
  },
  buttonText: {
    flex: 1,
    alignSelf: 'center'
  }
})
