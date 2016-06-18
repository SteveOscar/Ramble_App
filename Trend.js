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
      <View style={styles.trendButton}>
        <Text style={styles.buttonText}>{this.props.code} VS {this.props.trend[0]}:</Text>
        <Text style={styles.trendText}>1yr: {this.props.trend[1]}%, 2yr: {this.props.trend[2]}%, 3yr: {this.props.trend[3]}%,</Text>
      </View>
    );
  }
}

module.exports = Trend;
