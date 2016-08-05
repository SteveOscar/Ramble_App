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
  TouchableWithoutFeedback
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
    margin: 20
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


class WelcomePage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      txt: '',
      viewStyle: {
        height: 120,
        width: 120,
        borderRadius: 120/2,
      }
    };
  }

  animateView() {
    let callback = this.animationDone.bind(this)
    LayoutAnimation.configureNext(LayoutAnimation.Presets.spring, callback())
    this.setState({
      viewStyle: {
        height: this.state.viewStyle.height > 120 ? 120 : 300,
        width: this.state.viewStyle.width > 120 ? 120 : 300,
        borderRadius: this.state.viewStyle.borderRadius > 120/2 ? 120/2 : 300/2
      }
    })
  }

  animationDone() {
    this.setState({txt: this.state.viewStyle.height > 120 ? '' : 'Oh Hey'})
  }

  render() {
    let viewStyle = [styles.view, this.state.viewStyle]
    return (
      <View style={styles.container}>
        <View style={styles.logoBox}>
          <Image source={require('./Resources/Title.png')} style={styles.logo}/>
        </View>

        <View style={styles.container}>
          <TouchableWithoutFeedback onPress={this.animateView.bind(this)}>
            <View style={viewStyle}>
              <Text style={styles.viewText}>{this.state.txt}</Text>
            </View>
          </TouchableWithoutFeedback>
        </View>

      </View>

    );
  }
}

module.exports = WelcomePage;
