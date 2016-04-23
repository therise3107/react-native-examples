/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  View,
} = React;

var Moment = require('moment');
var DayItem = require('./src/day-item');


var weekdays = React.createClass({

  getInitialState: function(){
    return {
      tweets: []
    }
  },

  render: function(){
    return <View style= {styles.container}>
      {this.days()}
      <Text>
          {this.api()}
      </Text>

    </View>
  },

  days: function(){
    var daysitems = [] ;
    for(var i = 0; i < 7; i++){
      var day = Moment().add(i, 'days').format('dddd');
      daysitems.push(
        <DayItem day = {day} daysuntil = {i} />
      )
    };
    return daysitems ;
  },


  api: function(){
    return fetch('http://localhost:3000/api/v1/tweets.json')
        .then(function(response){return response.json()})
        .then(function(json){
          return { tweet: json }
        }).then(function(data){
          return console.log(data);
        });
      }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'

  }
});

AppRegistry.registerComponent('weekdays', () => weekdays);
