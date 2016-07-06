const React = require('react-native');
const { StyleSheet, Dimensions } = React;
var half = (Dimensions.get('window').width * 0.5) - 15;

module.exports = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    alignItems: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    alignSelf: 'center',
    marginTop: 1,
  },
  titleText: {
    fontSize: 18,
    color: 'black',
    textAlign: 'center',
    marginBottom: 15
  },
  header: {
    height: 70,
    backgroundColor: 'white',
    borderColor: '#48BBEC',
    marginBottom: 8,
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
    color: 'blue',
    alignSelf: 'center'
  },
  container: {
    padding: 5,
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
    left: half,
    height: 80
  },
  sortButtons: {
    height: 40,
    flexDirection: 'row',
    marginBottom: 4,
    justifyContent: 'center',
    width: 320,
    alignSelf: 'center',
    alignItems: 'center'
  },
  sortButton: {
    height: 35,
    flexDirection: 'row',
    marginBottom: 2,
    // marginLeft: 3,
    marginRight: 3,
    justifyContent: 'center',
    width: 60,
    backgroundColor: '#48BBEC',
    borderWidth: 0,
    borderRadius: 8,
    shadowOffset: {width: 3, height: 3},
    shadowColor: 'black'
  },
});
