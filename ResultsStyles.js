const React = require('react-native');
const { StyleSheet, Dimensions } = React;
var screenWidth = Dimensions.get('window').width

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
  description: {
    margin: 5,
    fontSize: 16,
    textAlign: 'center',
    color: '#656565',
    backgroundColor: 'transparent',
  },
  trendBox: {
    height: 50,
    flexDirection: 'row',
    marginTop: 3,
    marginBottom: 10,
    justifyContent: 'center',
    alignSelf: 'center'
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
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    marginRight: 5
  },
  expenseBox: {
    alignSelf: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: 150,
    height: 50,
    backgroundColor: 'white',
    borderWidth: 1,
    borderRadius: 8,
    margin: 3
  },
  trendHeaderText: {
    fontSize: 18,
    color: 'black',
    top: 8,
    fontWeight: 'bold',
    alignSelf: 'center'
  },
  trendText: {
    fontSize: 20,
    color: 'black',
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
