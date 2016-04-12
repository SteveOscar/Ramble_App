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

let styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // or 'stretch'
  }
});

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

      <Image source={require('./Resources/glass.png')} style={styles.backgroundImage}>
      <ScrollView>
        <Text>Key: 1 means equally expensive</Text>
        {expenses}
      </ScrollView>
      </Image>
    )
  }
}

module.exports = Expenses;
