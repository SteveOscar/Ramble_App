var React = require('react-native');

var {
  View,
  Text,
  Component,
  ListView,
  StyleSheet,
  Dimensions
} = React;

const styles = require('./ResultsStyles');

class Trend extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={styles.answerBox}>

        <View style={styles.trendBox}>
          <Text style={styles.trendHeaderText}>{this.props.code} in {this.props.trend[0]}:</Text>
        </View>


        <View style={styles.trendBox}>
          <View style={(this.props.trend[1] > 0) ? styles.miniGoodTrendBox : styles.miniBadTrendBox}>
            <Text style={styles.trendText}>1yr: {this.props.trend[1]}%</Text>
          </View>

          <View style={(this.props.trend[2] > 0) ? styles.miniGoodTrendBox : styles.miniBadTrendBox}>
            <Text style={styles.trendText}>2yrs: {this.props.trend[2]}%</Text>
          </View>

          <View style={(this.props.trend[3] > 0) ? styles.miniGoodTrendBox : styles.miniBadTrendBox}>
            <Text style={styles.trendText}>3yrs: {this.props.trend[4]}%</Text>
          </View>
        </View>

        <View style={styles.trendBox}>
          <View style={(this.props.trend[4] > 99) ? styles.goodExpenseBox : styles.badExpenseBox}>
            <Text style={styles.trendText}>Expense: {this.props.trend[4]*100}%</Text>
          </View>

          <View style={(this.props.trend[5] < 100) ? styles.peaceBox : styles.peaceBox}>
            <Text style={styles.trendText}>Peace Ranking: {this.props.trend[5]}/162</Text>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Trend;
