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
    this.state = {
      sortBy: 'cheap'
    };
  }

  changeSort(sortMode) {
    this.setState({sortBy: sortMode})
  }

  render() {
    let code = this.props.trends[0];
    let country_id = this.props.trends[1];
    let results = this.props.trends.slice(2, this.props.trends.length);
    if(this.state.sortBy === 'cheap') {
      var data = results.sort(function(a,b) { return b[4]-a[4] })
    }else if(this.state.sortBy === 'expensive') {
      var data = results.sort(function(a,b) { return a[4]-b[4] })
    }else if(this.state.sortBy === 'trendUp') {
      var data = results.sort(function(a,b) { return b[1]-a[1] })
    }
    else if(this.state.sortBy === 'trendDown') {
      var data = results.sort(function(a,b) { return a[1]-b[1] })
    }
    else if(this.state.sortBy === 'safety') {
      var data = results.sort(function(a,b) { return a[5]-b[5] })
    }

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
            <TouchableHighlight style={styles.sortButton} onPress={this.changeSort.bind(this, 'safety')}>
              <Text>{bomb}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.sortButton} onPress={this.changeSort.bind(this, 'trendUp')}>
              <Text>{up}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.sortButton} onPress={this.changeSort.bind(this, 'trendDown')}>
              <Text>{down}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.sortButton} onPress={this.changeSort.bind(this, 'cheap')}>
              <Text >{money}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.sortButton} onPress={this.changeSort.bind(this, 'expensive')}>
              <Text>{money}{money}{money}</Text>
            </TouchableHighlight>
          </View>
          {trends}
        </View>
      </ScrollView>
    );
  }
}

module.exports = Trends;
