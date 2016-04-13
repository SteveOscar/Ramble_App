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
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: 'white',
      opacity: 5
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'contain', // or 'stretch'
  },
  titleText: {
    fontSize: 18,
    color: 'black',
    alignSelf: 'center',
    fontWeight: 'bold',
    marginBottom: 25,
    marginTop: 10
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
      <Image source={require('./Resources/glass.png')} style={styles.backgroundImage}>
        <ScrollView>
        <View style={styles.container}>
          <Text style={styles.titleText}>Currency Exchange Rate Trends Over 1 Year</Text>
          {trends}
        </View>
        </ScrollView>
      </Image>
    );
  }
}

module.exports = Trends;
