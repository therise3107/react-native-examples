'use strict';

import React , {
  AppRegistry,
  View,
  Text,
  StyleSheet,
  Component
} from 'react-native';

var Singin = require('./components/singin');


module.exports = React.createClass({
  render(){
    return (
      <View style={styles.container}>
          
          <Singin/>

      </View>
    )}
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'skyblue',
  }
});
