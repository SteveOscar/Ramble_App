const React = require('react-native');
const { StyleSheet, Dimensions } = React;
var half = (Dimensions.get('window').width * 0.5) - 15;

module.exports = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    alignSelf: 'center',
    marginTop: 10,
  },
  titleText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 15
  },
  header: {
    height: 100,
    backgroundColor: 'white',
    borderColor: '#48BBEC',
    marginBottom: 10,
  },
  description: {
    marginBottom: 10,
    fontSize: 16,
    textAlign: 'center',
    color: '#656565'
  },
  helperText: {
    marginBottom: 10,
    fontSize: 14,
    textAlign: 'center',
    color: 'black'
  },
  link: {
    fontSize: 18,
    textAlign: 'center',
    color: 'blue'
  },
  container: {
    padding: 30,
    // marginTop: 65,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: 'red',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
    width: 250
  },
  title: {
    marginBottom: 10,
    flex: 1,
  },
  spinner: {
    position: 'absolute',
    top: 200,
    left: half
  },
});