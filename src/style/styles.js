const React = require('react-native')
const {StyleSheet} = React

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',

  },
  overlay: {
    flex: 1,
    position: 'absolute',
    left: -125,
    top: 0,
    opacity: 0.5,
  },
  down: {
    flex: 1,
    position: 'relative',
    justifyContent: 'flex-end',
  },
  title: {
    backgroundColor: 'powderblue',
    height: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
});

module.exports = styles
