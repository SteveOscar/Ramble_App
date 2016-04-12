var React = require('react-native');

var {
  View,
  Text,
  Component,
  ListView
} = React;

class Expense extends React.Component{

  render() {

    return (
      <View>
        <Text>{this.props.expense[0]}: {this.props.expense[1]}</Text>
      </View>
    );
  }
}

module.exports = Expense;
