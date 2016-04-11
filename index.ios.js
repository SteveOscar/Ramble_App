'use strict';
var React = require('react-native');
var SearchPage = require('./SearchPage');
var DropDown = require('./DropDown');
var ListPicker = require('./ListPicker');
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

var {
  View,
  Picker,
  Component
} = React;

class RambleApp extends React.Component {
  render() {
    return (
        <React.NavigatorIOS
          style={styles.container}
          initialRoute={{
          title: 'Ramble App',
          component: SearchPage
        }}/>
        // <View>
        //   <TestComponent />
        //   <ListPicker />
        // </View>
    );
  }
}

React.AppRegistry.registerComponent('RambleApp', function() { return RambleApp; });
