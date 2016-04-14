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

const styles = require('./Styles');

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
            <Text style={styles.titleText}>{this.props.country} exchange rate values change over 1 year from today. Countries which gained the most AGAINST this currency are shown first:</Text>
          </View>
          {trends}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Trends;
