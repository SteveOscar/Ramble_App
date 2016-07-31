const React = require('react-native');
const { StyleSheet, Dimensions } = React;
var half = (Dimensions.get('window').width * 0.5) - 15;

module.exports = StyleSheet.create({
  arrow: {
    width: 30,
    height: 30,
    margin: 3
  },
  arrow2: {
    resizeMode: 'contain',
    width: 30,
    height: 30
  },
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
  answerBox2: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: '#92BBD9',
    borderColor: '#48BBEC',
    borderWidth: 5,
    borderRadius: 8,
    margin: 10,
    justifyContent: 'center'
  },
  trendBox: {
    height: 40,
    width: 320,
    flexDirection: 'row',
    borderColor: '#48BBEC',
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'flex-start'
  },
  miniTrendHeaderBox: {
    position: 'absolute',
    top: 3
  },
  miniTrendBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: 100,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    margin: 3
  },
  peaceBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: 180,
    height: 50,
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 5
  },
  goodExpenseBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: 110,
    height: 50,
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 5
  },
  badExpenseBox: {
    justifyContent: 'center',
    flexDirection: 'row',
    width: 110,
    height: 30,
    backgroundColor: 'green',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 5
  },
  trendHeaderText: {
    fontSize: 18,
    color: 'black',
    top: 8,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  trendText: {
    fontSize: 14,
    color: 'white',
    alignSelf: 'auto',
    fontWeight: 'bold'
  },
  trendTextGood: {
    fontSize: 14,
    color: 'green',
    alignSelf: 'auto',
    fontWeight: 'bold'
  },
  trendTextBad: {
    fontSize: 14,
    color: 'red',
    alignSelf: 'auto',
    fontWeight: 'bold'
  },
  spinner: {
    position: 'absolute',
    alignSelf: 'center'
  },
});
