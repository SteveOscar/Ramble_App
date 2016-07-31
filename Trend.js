var React = require('react-native');
var ArrowUp = require('./ArrowUp');
var ArrowDown = require('./ArrowDown');

var {
  View,
  Text,
  Component,
  ListView,
  StyleSheet,
  Dimensions,
  Animated,
  Image
} = React;

const styles = require('./ResultsStyles');

class Trend extends React.Component{
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View style={{ flex: 1,
                     flexDirection: 'column',
                     backgroundColor: '#9DD6EB',
                     borderColor: '#48BBEC',
                     borderWidth: 5,
                     borderRadius: 8,
                     margin: 10,
                     justifyContent: 'center',
                     paddingBottom: 10
                           }}>


          <Text style={styles.trendHeaderText}>{this.props.code} in {this.props.trend[0]}:</Text>



        <View style={styles.trendBox}>
          <View style={styles.miniTrendBox}>
            <Text style={(this.props.trend[1] > 0) ? styles.trendTextGood : styles.trendTextBad}>1yr: {"\n"}{this.props.trend[1]}%</Text>
            {(this.props.trend[1] > 0) ? <ArrowUp/> : <ArrowDown/> }

          </View>

          <View style={styles.miniTrendBox}>
            <Text style={(this.props.trend[2] > 0) ? styles.trendTextGood : styles.trendTextBad}>2yrs: {"\n"}{this.props.trend[2]}%</Text>
            {/*{(this.props.trend[2] > 0) ? upArrow : downArrow }*/}
            {(this.props.trend[2] > 0) ? <ArrowUp/> : <ArrowDown/> }
          </View>

          <View style={styles.miniTrendBox}>
            <Text style={(this.props.trend[3] > 0) ? styles.trendTextGood : styles.trendTextBad}>3yrs: {"\n"}{this.props.trend[4]}%</Text>
            {(this.props.trend[3] > 0) ? <ArrowUp/> : <ArrowDown/> }
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Trend;
