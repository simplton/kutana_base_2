import React from 'react';
import { StyleSheet, Text, View, Animated,
  Image,
  Easing,
  Button,
  AppRegistry,
  Alert } from 'react-native';

const styles = require('./style/styles.js')

class Spinner extends React.Component {
  constructor (props) {
    super(props)
    this.spinValue = new Animated.Value(0)
  }

  componentDidMount () {
    this.spin()
  }

  spin () {
    this.spinValue.setValue(0)
    Animated.timing(
      this.spinValue,
      {
        toValue: 1,
        duration: this.props.timing,
        easing: Easing.linear
      }
    ).start(() => this.spin())
  }

  render() {

    const spin = this.spinValue.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '360deg']
    })

    return (
      <View style={styles.overlay}>
        <Animated.Image
          style={{ width: 250, height: 250, transform: [{rotate: spin}] }}
          source={require('./style/hand.png')} />
      </View>
      );
  }

}

module.exports = Spinner;

// source={{uri: 'https://s3.amazonaws.com/media-p.slid.es/uploads/alexanderfarennikov/images/1198519/reactjs.png'}} />
