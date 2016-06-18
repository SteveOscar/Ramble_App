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
    let code = this.props.trends[0]
    let data = this.props.trends.slice(1, this.props.trends.length)
    let trends = data.map((trend) => {
      return (
        <View key={trend[0]}>
          <Trend trend={trend} code={code}/>
        </View>
      );
    });

    return (
      <ScrollView>
      <Image source={require('./Resources/Title.png')} style={styles.backgroundImage}></Image>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.titleText}>{this.props.country} exchange rate values change over 3 years vs today. Countries which gained the most AGAINST this currency are shown first:</Text>
          </View>
          {trends}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Trends;
