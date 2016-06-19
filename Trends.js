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
            <Text style={styles.titleText}>{this.props.country} exchange rate trends. A negative number means your currency has lost value to  that currency. Countries which gained the most AGAINST your currency over 1 year are shown first:</Text>
          </View>
          {trends}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Trends;
