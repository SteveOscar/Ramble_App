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

const styles = require('./Styles');

class Expenses extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var expenses = this.props.expenses.map((expense) => {
      return (
        <View key={expense[0]}>
          <Expense expense={expense} navigator={this.props.navigator} country={this.props.country}/>
        </View>
      );
    });

    return (
      <ScrollView>
        <Image source={require('./Resources/Title.png')} style={styles.backgroundImage}></Image>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleText}>How far {this.props.country} currency will go in each country vs domestically. Countries are shown from most exensive to least expensive:</Text>
          </View>
          {expenses}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Expenses;
