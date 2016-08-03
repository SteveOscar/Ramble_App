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
  trendBox: {
    height: 40,
    width: 320,
    flexDirection: 'row',
    borderColor: '#48BBEC',
    margin: 10,
    justifyContent: 'center',
    alignSelf: 'flex-start'
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
    top: 2,
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
