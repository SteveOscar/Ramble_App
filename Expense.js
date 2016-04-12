var React = require('react-native');

var {
  View,
  Text,
  Component
} = React;

class Expense extends React.Component{
  getInitialState() {
    return { editable: false };
  }

  render() {

    return (
      <View>
        <Text>{this.props.expense}</Text>
      </View>
    );
  }
}

module.exports = Expense;
