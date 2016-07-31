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

class ExpenseTrend extends React.Component{
  constructor(props) {
    super(props);
    // this.state = {
    //   bounceValue: new Animated.Value(0),
    // };
  }

  // componentDidMount() {
  //   this.state.bounceValue.setValue(1.5);     // Start large
  //   Animated.spring(                          // Base: spring, decay, timing
  //     this.state.bounceValue,                 // Animate `bounceValue`
  //     {
  //       toValue: 1,                         // Animate to smaller size
  //       friction: .7,                          // Bouncier spring
  //     }
  //   ).start();                                // Start the animation
  // }

  render() {
    // if(this.props.trend[0] === 'Azerbaijan') { debugger }
    return (
      <View style={{flex: 1,
                             flexDirection: 'column',
                             backgroundColor: '#9DD6EB',
                             borderColor: '#48BBEC',
                             borderWidth: 5,
                             borderRadius: 8,
                             margin: 10,
                             justifyContent: 'center'
                           }}>

        <View style={styles.trendBox}>
          <Text style={styles.trendHeaderText}>{this.props.trend[0]}:</Text>
        </View>

        <View style={styles.trendBox}>
          <View style={(this.props.trend[4] > 99) ? styles.goodExpenseBox : styles.badExpenseBox}>
            <Text style={styles.trendText}>Expense: {parseInt((this.props.trend[4])*100)}%</Text>
          </View>

          <View style={(this.props.trend[5] < 100) ? styles.peaceBox : styles.peaceBox}>
            <Text style={styles.trendText}>Peace Ranking: {this.props.trend[5]}/162</Text>
          </View>
        </View>
      </View>
    );
  }
}

module.exports = ExpenseTrend;
