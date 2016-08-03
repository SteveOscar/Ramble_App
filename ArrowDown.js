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

class ArrowDown extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      bounceValue: new Animated.Value(0),
    };
  }

  componentDidMount() {
    let component = this;
    if(this.props.position === 1) {
      this.state.bounceValue.setValue(2);     // Start large
      setTimeout(function() {
        Animated.spring(
          component.state.bounceValue,
          {
            toValue: 1,
            friction: 1,
          }
        ).start();
      } ,2000);
    }else {
      this.state.bounceValue.setValue(1);
    }
  }

  render() {
    let downArrow = <Animated.Image source={require('./Resources/arrowDown.png')} style={{transform: [{scale: this.state.bounceValue}], width: 20, height: 40, margin: 4}}/>;
    return (
      <View>
        {downArrow}
      </View>

    );
  }
}

module.exports = ArrowDown;
