var React = require('react-native');
var Expense = require('./Expense');
var {
  StyleSheet,
  Image,
  View,
  ActivityIndicatorIOS,
  TouchableHighlight,
  ScrollView,
  Text,
  Component
} = React;

const styles = require('./Styles');

class Expenses extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      sortBy: 'expensive'
    };
  }

  showSpinner() {
    this.setState({isLoading: true});
  }

  hideSpinner() {
    this.setState({isLoading: false});
  }

  changeSort() {
    this.state.sortBy === 'cheap' ? this.setState({sortBy: 'expensive'}) : this.setState({sortBy: 'cheap'})
  }

  render() {
    let spinner = this.state.isLoading ? (<ActivityIndicatorIOS size='large' color='black' style = {styles.spinner}/>) : (<View/>);
    let expenses = this.state.sortBy === 'expensive' ? (this.props.expenses.sort(function(a,b) { return a[1]-b[1] })) : (this.props.expenses.sort(function(a,b) { return b[1]-a[1] }))
    let sortText = this.state.sortBy === 'expensive' ? 'Least expensive' : 'Most Expensive';
    let sortedExpenses = expenses.map((expense) => {
      return (
        <View key={expense[0]}>
          <Expense expense={expense} navigator={this.props.navigator} country={this.props.country} showSpinner={this.showSpinner.bind(this)} hideSpinner={this.hideSpinner.bind(this)}/>
        </View>
      );
    });

    return (
      <ScrollView>
        {spinner}
        <Image source={require('./Resources/Title.png')} style={styles.backgroundImage}></Image>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleText}>How far {this.props.country} currency will go in each country vs domestically. Countries are shown from most exensive to least expensive:</Text>
          </View>

          <TouchableHighlight onPress={this.changeSort.bind(this)}
                              style={styles.button}>
            <Text style={styles.buttonText}>
              {sortText}
            </Text>
          </TouchableHighlight>

          {sortedExpenses}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Expenses;
