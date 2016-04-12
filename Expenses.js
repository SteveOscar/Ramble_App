var React = require('react-native');
var Expense = require('./Expense');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ScrollView,
  Text,
  Component
} = React;

class Expenses extends Component {

  constructor(props) {
    super(props);
  }


  render() {
    var expenses = this.props.expenses.map((expense) => {
      return (
        <View key={expense[0]}>
          <Expense expense={expense}/>
        </View>
      )
    });

    return (
      <ScrollView>
        {expenses}
      </ScrollView>
    )
  }
}

module.exports = Expenses;
