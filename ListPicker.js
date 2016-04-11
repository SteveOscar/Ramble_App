"use strict";

var React = require('react-native');
var ListPopover = require('react-native-list-popover');
var {
  AppRegistry,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
} = React;
var items = ["Item 1", "Item 2"];

var ListPicker = React.createClass({
  getInitialState: function() {
    return {
      item: "Select Item",
      isVisible: false,
    };
  },

  showPopover: function() {
    this.setState({isVisible: true});
  },
  closePopover: function() {
    this.setState({isVisible: false});
  },
  setItem: function(item) {
    this.setState({item: item});
  },

  render: function() {
    return (
      <View style={styles.container}>
        <TouchableHighlight style={styles.button} onPress={this.showPopover}>
          <Text>{this.state.item}</Text>
        </TouchableHighlight>

        <ListPopover
          list={items}
          isVisible={this.state.isVisible}
          onClick={this.setItem}
          onClose={this.closePopover}/>
      </View>
    );
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  },
  button: {
    borderRadius: 4,
    padding: 10,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#B8C",
  },
});

module.exports = ListPicker;
