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
  container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      opacity: 5
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // or 'stretch'
  },
  titleText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 10
  },
});

class Expenses extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    var expenses = this.props.expenses.map((expense) => {
      return (
        <View key={expense[0]}>
          <Expense expense={expense} navigator={this.props.navigator}/>
        </View>
      )
    });

    return (
      <Image source={require('./Resources/glass.png')} style={styles.backgroundImage}>
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}>How far your home currency will go in each country (Switzerland: 75% means 1 unit of your currency will have 75% of its purchasing power in Switzerland vs at home.)</Text>
          {expenses}
        </View>
        </ScrollView>
      </Image>
    )
  }
}

module.exports = Expenses;
