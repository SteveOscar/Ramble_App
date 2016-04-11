'use strict';
var React = require('react-native');
var SearchPage = require('./SearchPage');
var DropDown = require('./DropDown');
var TestComponent = require('./TestComponent');

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  container: {
    flex: 1
  },
});

class RambleApp extends React.Component {
  render() {
    return (
        <React.View>
        <React.NavigatorIOS
          style={styles.container}
          initialRoute={{
          title: 'Ramble App',
          component: SearchPage
        }}/>
        <TestComponent />
        <DropDown />
        </React.View>
    );
  }
}

React.AppRegistry.registerComponent('RambleApp', function() { return RambleApp; });
