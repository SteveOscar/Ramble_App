var React = require('react-native');
var Trend = require('./Trend');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ScrollView,
  Text,
  Component
} = React;

let styles = StyleSheet.create({
  container: {
    padding: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    alignSelf: 'center',
    marginTop: 10
  },
  titleText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
    marginBottom: 15
  },
  header: {
    height: 70,
    backgroundColor: 'white',
    borderColor: '#48BBEC',
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
});

class Trends extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('IN TRENDS!');
    var trends = this.props.trends.map((trend) => {
      return (
        <View key={trend[0]}>
          <Trend trend={trend}/>
        </View>
      );
    });

    return (
      <ScrollView>
        <Image source={require('./Resources/Title.png')} style={styles.backgroundImage}></Image>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleText}>{this.props.country} exchange rate value change over 1 year from today</Text>
          </View>
          {trends}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Trends;
