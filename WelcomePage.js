'use strict';
let FMPicker = require('./FMPicker');
let Expenses = require('./Expenses');
let Trends = require('./Trends');
let ResponsiveImage = require('react-native-responsive-image');

var React = require('react-native');
var {
  StyleSheet,
  Text,
  TextInput,
  View,
  Picker,
  TouchableHighlight,
  ActivityIndicatorIOS,
  Image,
  Component,
  LayoutAnimation,
  TouchableWithoutFeedback,
  Animated,
  Easing
} = React;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  view: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    margin: 20,
  },
  viewText: {
    color: 'white'
  },
  logo: {
    flex:1,
    resizeMode: 'contain',
  },
  logoBox: {
    position: 'absolute',
    alignItems: 'center',
    height: 200
  },
});

let TIMES = 400;

class WelcomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      angle: new Animated.Value(0),
      txt: '',
      viewStyle: {
        height: 50,
        width: 50,
        borderRadius: 0,
      }
    };
  }

  _animate() {
    this.state.angle.setValue(0);
    this._anim = Animated.timing(this.state.angle, {
      toValue: 360*TIMES,
      duration: 500*TIMES,
      easing: Easing.spring
    }).start(this._animate);
  }

  componentDidMount() {
    this._animate();
  }

  animateView() {
    this.setState({txt: ''});
    let callback = this.animationDone.bind(this);
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring, callback());
    this.setState({
      viewStyle: {
        height: this.state.viewStyle.height > 50 ? 50 : 300,
        width: this.state.viewStyle.width > 50 ? 50 : 300,
        borderRadius: this.state.viewStyle.borderRadius > 0 ? 0 : 300/2
      }
    })
  }

  animationDone() {
    const component = this
    setTimeout(function() {
      this.setState({ txt: this.state.viewStyle.height < 300 ? '' : 'Oh, Hey'})
    }.bind(this), 800)
  }

  render() {
    let viewStyle = [styles.view, this.state.viewStyle, {transform: [
                                                          {rotate: this.state.angle.interpolate({
                                                            inputRange: [0, 360],
                                                            outputRange: ['0deg', '360deg']
                                                          })}]}]
    return (
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image source={require('./Resources/Title.png')} style={styles.logo}/>
        </View>

        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.animateView.bind(this)}>
            <Animated.View style={viewStyle}>
              <Text style={styles.viewText}>{this.state.txt}</Text>
            </Animated.View>
          </TouchableWithoutFeedback>
        </View>

      </View>

    );
  }
}

module.exports = WelcomePage;
