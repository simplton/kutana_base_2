import React from 'react';
import { StyleSheet, Text, View, Animated,
  Image,
  Easing,
  Button,
  AppRegistry,
  Alert } from 'react-native';

const styles = require('./style/styles.js')
const Spinner = require('./spinner.js')

class Speed extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      timing: 1000 * 60 * 60,
      timing2: 1000 * 60,
      start: '',
      stop: '',
      diff: '',
    }
  }
  // componentDidMount () {
  // }
  _slowDown = () => {
    let foo = this.state.timing2
    this.setState({ timing2: foo + 1000 })
  };

  _speedUp = () => {
    let foo = this.state.timing2
    if(foo < 1001){
      foo += 1000
    }
    this.setState({ timing2: foo - 1000 })
  };

  _start = () => {
    let foo = new Date()
    this.setState({ start: foo })
  }

  _stop = () => {
    let foo = new Date()
    let boo = this.state.start
    this.setState({ stop: foo })
    this.setState({ start: '' })
    if(this.state.start !== '' && foo > boo){
      this.setState({ diff:  foo - boo })
    }
  }

    render() {

      return (
        <View style={{flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
          <Text>Speed1: {this.state.timing / 1000} in seconds</Text>
          <Text>Speed2: {this.state.timing2 / 1000} in seconds</Text>
          <Text>And here is your diff: {this.state.diff / 1000}</Text>
          <Button
            title="Slow down"
            onPress={this._slowDown}
          />
          <Button
            title="Speed up"
            onPress={this._speedUp}
          />
          <Button
            title="Start"
            onPress={this._start}
          />
          <Button
            title="Stop"
            onPress={this._stop}
          />
          <View style={styles.container}>
            <Spinner timing={this.state.timing} />
            <Spinner timing={this.state.timing2} />
          </View>
        </View>
      )
    }
}

module.exports = Speed
