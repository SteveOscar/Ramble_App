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
    fontSize: 18,
    color: 'white',
    alignSelf: 'center',
    fontWeight: 'bold'
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
  trendBox: {
    height: 80,
    flexDirection: 'row',
    backgroundColor: 'white',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    width: 350
  },
  miniTrendHeaderBox: {
    justifyContent: 'center',
    position: 'absolute',
    top: 3
  },
  miniTrendBox: {
    justifyContent: 'center',
    width: 100,
    height: 30,
    backgroundColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 3,
    marginRight: 5,
    marginTop: 40
  },
  trendHeaderText: {
    fontSize: 18,
    color: 'black',
    top: 8,
    fontWeight: 'bold'
  },
  trendText: {
    fontSize: 15,
    color: 'white',
    alignSelf: 'auto',
    fontWeight: 'bold'
  },
  spinner: {
    position: 'absolute',
    alignSelf: 'center'
  },
});
