var React = require('react-native');
var Trend = require('./Trend');
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ScrollView,
  Text,
  Linking,
  Component
} = React;

const styles = require('./Styles');

class Trends extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    console.log('IN TRENDS!');
    let code = this.props.trends[0];
    let data = this.props.trends.slice(1, this.props.trends.length);
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
            <Text style={styles.description}>{this.props.country} exchange rate trends. Green means you get more money, red means less.</Text>
            <Text style={styles.link}
                  onPress={() => Linking.openURL('http://www.ramblemap.com')}>
              View Map
            </Text>
          </View>
          {trends}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Trends;
