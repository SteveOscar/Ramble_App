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
      <View style={styles.trendBox}>

        <View style={styles.miniTrendHeaderBox}>
          <Text style={styles.trendHeaderText}>{this.props.code} VS {this.props.trend[0]}:</Text>
        </View>


        <View style={styles.miniTrendBox}>
          <Text style={styles.trendText}>1yr: {this.props.trend[1]}%</Text>
        </View>

        <View style={styles.miniTrendBox}>
          <Text style={styles.trendText}>2yrs: {this.props.trend[2]}%</Text>
        </View>

        <View style={styles.miniTrendBox}>
          <Text style={styles.trendText}>3yrs: {this.props.trend[3]}%</Text>
        </View>

      </View>
    );
  }
}

module.exports = Trend;
