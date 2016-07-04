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
import Icon from 'react-native-vector-icons/MaterialIcons';
import FA from 'react-native-vector-icons/FontAwesome';
const bomb = (<FA name="bomb" size={30} color="white" />)
const money = (<FA name="usd" size={30} color="white" />)
const up = (<Icon name="call-made" size={30} color="white" />)
const down = (<Icon name="call-received" size={30} color="white" />)
class Trends extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    let code = this.props.trends[0];
    let country_id = this.props.trends[1];
    let data = this.props.trends.slice(2, this.props.trends.length);
    let trends = data.map((trend) => {
      return (
        <View key={trend[0]}>
          <Trend trend={trend} code={code}/>
        </View>
      );
    });

    return (
      <ScrollView>
      {/*<Image source={require('./Resources/Title.png')} style={styles.backgroundImage}></Image>*/}
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.description}>{this.props.country} exchange rate trends. Green means you get more money, red means less.</Text>
            <Text style={styles.link}
                  onPress={() => Linking.openURL('http://www.ramblemap.com/display_map?utf8=%E2%9C%93&country=' + country_id + '&region=world&commit=Submit')}>
              View Map
            </Text>
          </View>
          <View style={styles.sortButtons}>
            <View style={styles.sortButton}>
              <Text>{bomb}</Text>
            </View>
            <View style={styles.sortButton}>
              <Text>{up}</Text>
            </View>
            <View style={styles.sortButton}>
              <Text>{down}</Text>
            </View>
            <View style={styles.sortButton}>
              <Text >{money}</Text>
            </View>
            <View style={styles.sortButton}>
              <Text>{money}{money}{money}</Text>
            </View>
          </View>
          {trends}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Trends;
