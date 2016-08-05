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
                     borderRadius: 8,
                     margin: 10,
                     justifyContent: 'center',
                     paddingBottom: 10
                           }}>


          <Text style={styles.trendHeaderText}>{this.props.code} in {this.props.trend[0]}:</Text>


        <Text style={styles.description}>Year-over-year exchange rate trends</Text>
        <View style={styles.trendBox}>
          <View style={styles.miniTrendBox}>
            <Text style={(this.props.trend[1] > 0) ? styles.trendTextGood : styles.trendTextBad}>1yr: {"\n"}{this.props.trend[1]}%</Text>
            {(this.props.trend[1] > 0) ? <ArrowUp position={this.props.position}/> : <ArrowDown position={this.props.position}/> }

          </View>

          <View style={styles.miniTrendBox}>
            <Text style={(this.props.trend[2] > 0) ? styles.trendTextGood : styles.trendTextBad}>2yrs: {"\n"}{this.props.trend[2]}%</Text>
            {/*{(this.props.trend[2] > 0) ? upArrow : downArrow }*/}
            {(this.props.trend[2] > 0) ? <ArrowUp position={this.props.position}/> : <ArrowDown position={this.props.position}/> }
          </View>

          <View style={styles.miniTrendBox}>
            <Text style={(this.props.trend[3] > 0) ? styles.trendTextGood : styles.trendTextBad}>3yrs: {"\n"}{this.props.trend[4]}%</Text>
            {(this.props.trend[3] > 0) ? <ArrowUp position={this.props.position}/> : <ArrowDown position={this.props.position}/> }
          </View>
        </View>

        <Text style={styles.description}>Your home currency's power abroad</Text>
        <View style={styles.trendBox}>
          <View style={styles.expenseBox}>
            <Text style={styles.trendText}>{parseInt((this.props.trend[4])*100)}%</Text>
            {/*{(this.props.trend[1] > 0) ? <ArrowUp position={this.props.position}/> : <ArrowDown position={this.props.position}/> }*/}
          </View>
        </View>

        <Text style={styles.description}>World peace rankings</Text>
        <View style={styles.trendBox}>
          <View style={styles.peaceBox}>
            <Text style={styles.trendText}>{this.props.trend[5]}/162</Text>
            {/*{(this.props.trend[1] > 0) ? <ArrowUp position={this.props.position}/> : <ArrowDown position={this.props.position}/> }*/}
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Trend;
