const React = require('react-native');
const { StyleSheet } = React;

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
});
