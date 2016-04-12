var React = require('react-native');
var Expense = require('./Expense');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ListView,
  Text,
  Component
} = React;

class Expenses extends Component {

  constructor(props) {
    super(props);
    // var dataSource = new ListView.DataSource(
    //   {rowHasChanged: (r1, r2) => r1[0] !== r2[0]});
    // this.state = {
    //   dataSource: dataSource.cloneWithRows(this.props.listings)
    // };
  }



  renderRow(rowData, sectionID, rowID) {
    return (
      <TouchableHighlight
          underlayColor='#dddddd'>
        <View>
          <Text>{rowData[0]}</Text>
        </View>
      </TouchableHighlight>
    );
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
      <View>
        {expenses}
      </View>
    )
  }
}

module.exports = Expenses;
