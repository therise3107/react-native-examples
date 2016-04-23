'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var DayItem = React.createClass({
  render: function() {
    return <Text >
      {this.props.day}
    </Text>
  }

});


module.exports = DayItem ;
