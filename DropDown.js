var React = require('react-native');
var {
  StyleSheet,
  Picker,
  Component
} = React;

class DropDown extends React.Component {
  render() {
    return (
      <Picker>
        <Picker.Item label="Ruby" value="ruby" />
        <Picker.Item label="wow" value="wow" />
        <Picker.Item label="sc2" value="sc2" />
        <Picker.Item label="Java" value="java" />
        <Picker.Item label="JavaScript" value="js" />
      </Picker>
    );
  }
}

module.exports = DropDown;
