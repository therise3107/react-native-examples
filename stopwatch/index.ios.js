/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';
var formatTime = require('minutes-seconds-milliseconds');
var React = require('react-native');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;

var stopwatch = React.createClass({

  getInitialState: function(){
    return {
      toggleStart: false,
      timeElapsed: null,
      startTime: null,
      laps: []
    }
  },

  handleStartPress: function(){
    
    this.setState({
      toggleStart: !this.state.toggleStart,
      startTime: new Date()
    });
    if (this.state.toggleStart)
      { 
      this.interval =  setInterval(() =>{
            this.setState({
              timeElapsed: new Date() - this.state.startTime
            });
            }, 100);
      }
    else
      {
        clearInterval(this.interval);
        
      }
  },

  handleLapPress: function(){
    if (this.state.toggleStart){
        var lap = this.state.timeElapsed;
        this.setState({
          laps: this.state.laps.concat([lap])
        });
        return ;
      }
        
      this.setState({
        timeElapsed: null,
        laps: []
      });
  },

  render: function(){

    return <View style = {styles.container}>
    <View style= {styles.header}>
      <View style = {styles.timewrapper}>
        <Text style={styles.timer}>
          {formatTime(this.state.timeElapsed)}
        </Text>
      </View>  
      <View style = {styles.buttonrapper}>
        {this.startStopButton()}
        {this.lapButton()}
      </View>
    </View>
      <View style={styles.footer}>
          {this.lap()}
      </View>
    </View>
  },

  lap: function(){
    return this.state.laps.map(function(time,index){
      return <Text style = {styles.showlap}>
        {index+1}
        {formatTime(time)}
        
      </Text>
    });
  },

  startStopButton: function(){
    var style = this.state.toggleStart ? styles.stopButton : styles.startButton
    return <TouchableHighlight 
    onPress={this.handleStartPress}
    underlayColor = 'grey'
    style = {[styles.button, style]}
    >
      <Text>
        { this.state.toggleStart ? 'Stop':'Start'}
      </Text>
    </TouchableHighlight>
  },

  lapButton: function(){
    return <TouchableHighlight
    underlayColor= 'grey'
    onPress = {this.handleLapPress}
    style = {styles.button}
    >
      <Text>
        {this.state.toggleStart ? 'lap': 'clear'} 
      </Text>
    </TouchableHighlight>
  },

  border: function(color){
    return {
      borderColor: color,
      borderWidth: 4
    }
  }

});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'stretch'
  },
  header: {
    flex: 1
  },
  footer: {
    flex: 1
  }, 
  timewrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 1,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton:{
    borderColor: '#00CC00'
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  showlap: {
     flexDirection: 'row',
    justifyContent: 'space-around'
  }
})

AppRegistry.registerComponent('stopwatch', () => stopwatch);
                  