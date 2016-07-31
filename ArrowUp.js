var React = require('react-native');

var {
  View,
  Text,
  Component,
  StyleSheet,
  Animated,
  Image
} = React;

const styles = require('./ResultsStyles');

class ArrowUp extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    this.state.bounceValue.setValue(0.1);     // Start large
    Animated.spring(                          // Base: spring, decay, timing
      this.state.bounceValue,                 // Animate `bounceValue`
      {
        toValue: 1,                         // Animate to smaller size
        friction: 1,                          // Bouncier spring
      }
    ).start();                                // Start the animation
  }

  render() {
    let upArrow = <Animated.Image source={require('./Resources/arrowUp.png')} style={{transform: [{scale: this.state.bounceValue}], width: 30, height: 40, margin: 4}}/>;
    // let downArrow = <Image source={require('./Resources/arrowDown.png')} style={{transform: [{scale: this.state.bounceValue}], width: 20, height: 40, margin: 4}}/>;
    return (
      <View>
        {upArrow}
      </View>

    );
  }
}

module.exports = ArrowUp;
