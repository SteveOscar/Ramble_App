const React = require('react-native');
const { StyleSheet, Dimensions } = React;
var half = (Dimensions.get('window').width * 0.5) - 15;

module.exports = StyleSheet.create({
  welcome: {
      fontSize: 20,
      textAlign: 'center',
      margin: 10,
  },
  instructions: {
      textAlign: 'center',
      color: '#333333',
      marginBottom: 5,
  },
  buttonText: {
    left: 5,
    top: 10,
    position: 'absolute',
    fontSize: 18,
    color: 'white',
    alignSelf: 'stretch',
    fontWeight: 'bold'
  },
  trendText: {
    left: 5,
    top: 40,
    position: 'absolute',
    fontSize: 15,
    color: 'black',
    alignSelf: 'auto'
  },
  button: {
    height: 36,
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center',
    width: 300
  },
  trendButton: {
    height: 72,
    flexDirection: 'row',
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
    width: 250
  },
  spinner: {
    position: 'absolute',
    alignSelf: 'center'
  },
});
