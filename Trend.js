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
      <View style={styles.button}>
        <Text style={styles.buttonText}>{this.props.trend[0]}: {this.props.trend[1]}%</Text>
      </View>
    );
  }
}

module.exports = Trend;
