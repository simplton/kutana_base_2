import React from 'react';
import { StyleSheet, Text, View, Animated,
  Image,
  Easing,
  Button,
  AppRegistry,
  Alert } from 'react-native';

const styles = require('./src/style/styles.js')
const Speed = require('./src/speed')


export default class App extends React.Component {

  render() {

    return (
      <View style={{ flex: 1}}>
        <View style={styles.title}>
          <Text style={{textAlign: 'center'}}> Inception Time </Text>
        </View>
        <Speed />
        <View style={styles.down}>
          <Text> Is this even here??? </Text>
        </View>
      </View>
    );
  }
}

AppRegistry.registerComponent('flock', () => App);
