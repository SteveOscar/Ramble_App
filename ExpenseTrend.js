var React = require('react-native');

var {
  View,
  Text,
  Component,
  ListView,
  StyleSheet,
  Dimensions,
  Animated
} = React;

const styles = require('./ExpenseStyles');

class ExpenseTrend extends React.Component{
  constructor(props) {
    super(props);
    // this.state = {
    //   bounceValue: new Animated.Value(0),
    // };
  }

  render() {
    // if(this.props.trend[0] === 'Azerbaijan') { debugger }
    return (
      <View style={{flex: 1,
                             flexDirection: 'column',
                             backgroundColor: 'transparent',
                             borderColor: '#48BBEC',
                             borderWidth: 5,
                             borderRadius: 8,
                             margin: 10,
                             justifyContent: 'center'
                           }}>


          <Text style={styles.trendHeaderText}>{this.props.trend[0]}:</Text>


        <View style={styles.trendBox}>
          <View style={(this.props.trend[4] > 99) ? styles.goodExpenseBox : styles.badExpenseBox}>
            <Text style={styles.trendText}>Expense:{"\n"} {parseInt((this.props.trend[4])*100)}%</Text>
          </View>

          <View style={styles.peaceBox}>
            <Text style={styles.trendText}>Peace Ranking:{"\n"} {this.props.trend[5]}/162</Text>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = ExpenseTrend;
