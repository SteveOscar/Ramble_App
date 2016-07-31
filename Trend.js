var React = require('react-native');

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
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.state.bounceValue.setValue(1.5);     // Start large
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 1,                         // Animate to smaller size
        friction: 0.5,                          // Bouncier spring
      }
    ).start();                                // Start the animation
  }

  render() {
    let upArrow = <Animated.Image source={require('./Resources/arrowUp.png')} style={{transform: [{scale: this.state.bounceValue}], width: 30, height: 40, margin: 4}}/>;
    let downArrow = <Image source={require('./Resources/arrowDown.png')} style={{width: 20, height: 40, margin: 4}}/>;
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
            {(this.props.trend[1] > 0) ? upArrow : downArrow }
          </View>

          <View style={styles.miniTrendBox}>
            <Text style={(this.props.trend[2] > 0) ? styles.trendTextGood : styles.trendTextBad}>2yrs: {"\n"}{this.props.trend[2]}%</Text>
            {(this.props.trend[2] > 0) ? upArrow : downArrow }
          </View>

          <View style={styles.miniTrendBox}>
            <Text style={(this.props.trend[3] > 0) ? styles.trendTextGood : styles.trendTextBad}>3yrs: {"\n"}{this.props.trend[4]}%</Text>
            {(this.props.trend[2] > 0) ? upArrow : downArrow }
          </View>
        </View>
      </View>
    );
  }
}

module.exports = Trend;
