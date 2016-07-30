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
        friction: .5,                          // Bouncier spring
      }
    ).start();                                // Start the animation
  }

  render() {
    return (
      <Animated.View style={{flex: 1,
                             flexDirection: 'column',
                             backgroundColor: '#9DD6EB',
                             borderColor: '#48BBEC',
                             borderWidth: 5,
                             borderRadius: 8,
                             margin: 10,
                             justifyContent: 'center',
                             transform: [{scale: this.state.bounceValue}]
                           }}>

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
      </Animated.View>
    );
  }
}

module.exports = Trend;
