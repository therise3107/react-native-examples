import React, {
  Component,
  View,
  StyleSheet,
  Text,
  TextInput
} from 'react-native';

var Button = require('./common/button');
var Auth0Lock = require('react-native-lock-ios');
var lock = new Auth0Lock({clientId: "GX3rgSNmSA9TB5zwsgWcwdhJL5adA9A7", domain: "coldevtest.eu.auth0.com"});


module.exports = React.createClass({
  getInitialState(){
    return {
      username: '',
      password: ''
    }
  },
  render(){
    return (
      <View  style= {styles.container}>
        <Text>Sign in </Text>
        <Text style={styles.label}>Username: </Text>
        <TextInput style= {styles.input}
          value={this.state.username}
          onChangeText = {(text) => this.setState({username: text })}
          />
        <Text style={styles.label}>Password: </Text>
        <TextInput secureTextEntry = {true} style= {styles.input}
          value={this.state.password}
          onChangeText = {(text) => this.setState({password: text})}
          />
        <Button text="sign in" onPress = {this.handleButtonPress } />
      </View>
    )
  },
  handleButtonPress(){
  }
});

const styles = StyleSheet.create({
  container:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  input:{
    padding: 4,
    height: 40,
    width: 200,
    borderColor: 'grey',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#F5FCFF',
    margin: 5,
    alignSelf: 'center'
  },
  label:{
    fontSize: 18
  }
});
