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
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    alignSelf: 'center',
    marginTop: 10
  },
  titleText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
    marginBottom: 15
  },
  header: {
    height: 130,
    backgroundColor: 'rgba(0, 0, 0, 0)',
    borderColor: '#48BBEC',
    alignSelf: 'stretch',
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
      );
    });

    return (
      <ScrollView>
        <Image source={require('./Resources/Title.png')} style={styles.backgroundImage}></Image>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleText}>Showing how far {this.props.country} currency will go in each country vs domestically. Countries are shown from most exensive to least expensive:</Text>
          </View>
          {expenses}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Expenses;
