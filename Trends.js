var React = require('react-native');
var Trend = require('./Trend');
var ExpenseTrend = require('./ExpenseTrend');
var Swiper = require('react-native-swiper')
var {
  StyleSheet,
  Image,
  View,
  TouchableHighlight,
  ScrollView,
  Text,
  Linking,
  Component,
  AppRegistry
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
      sortBy: 'relatively cheap'
    };
  }

  changeSort(sortMode) {
    if(sortMode === 'most peaceful' && this.state.sortBy === 'most peaceful') {
      this.setState({sortBy: 'least peaceful'})
    }else {
      this.setState({sortBy: sortMode})
    }
  }

  render() {
    let code = this.props.trends[0];
    let country_id = this.props.trends[1];
    let results = this.props.trends.slice(2, this.props.trends.length);
    if(this.state.sortBy === 'relatively cheap') {
      var data = results.sort(function(a,b) { return b[4]-a[4] })
    }else if(this.state.sortBy === 'relatively expensive') {
      var data = results.sort(function(a,b) { return a[4]-b[4] })
    }else if(this.state.sortBy === 'trending more expensive') {
      var data = results.sort(function(a,b) { return b[1]-a[1] })
    }
    else if(this.state.sortBy === 'trending less expensive') {
      var data = results.sort(function(a,b) { return a[1]-b[1] })
    }
    else if(this.state.sortBy === 'most peaceful') {
      var data = results.sort(function(a,b) { return a[5]-b[5] })
    }
    else if(this.state.sortBy === 'least peaceful') {
      var data = results.sort(function(a,b) { return b[5]-a[5] })
    }

    let trends = data.map((trend) => {
      return (
        <View key={trend[0]}>
          <Trend trend={trend} code={code}/>
        </View>
      );
    });

    let expenseTrends = data.map((trend) => {
      return (
        <View key={trend[0]}>
          <ExpenseTrend trend={trend} code={code}/>
        </View>
      );
    });

    return (
      <ScrollView>

        <Image source={require('./Resources/magGlass.png')} style={styles.trendsBackground}>

        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.description}>{this.props.country} exchange rate trends. Green is good for your wallet. Red is bad.</Text>
          </View>

          <View style={styles.sortButtons}>
            <TouchableHighlight style={styles.sortButton} onPress={this.changeSort.bind(this, 'most peaceful')}>
              <Text>{bomb}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.sortButton} onPress={this.changeSort.bind(this, 'trending more expensive')}>
              <Text>{up}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.sortButton} onPress={this.changeSort.bind(this, 'trending less expensive')}>
              <Text>{down}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.sortButton} onPress={this.changeSort.bind(this, 'relatively cheap')}>
              <Text >{money}</Text>
            </TouchableHighlight>
            <TouchableHighlight style={styles.sortButton} onPress={this.changeSort.bind(this, 'relatively expensive')}>
              <Text>{money}{money}{money}</Text>
            </TouchableHighlight>
          </View>
          <Text style={styles.description}>
            Sorted by {this.state.sortBy} first
          </Text>

          <Text style={styles.description}>
            Exchange Rate Trends:
          </Text>
          <Swiper style={styles.wrapper}
            height={150}
            removeClippedSubviews={true}
            showsPagination={false}
            showsButtons={false}>
            {trends}
          </Swiper>

          <Text style={styles.description}>
            Relative Expense:
          </Text>
          <Swiper style={styles.wrapper}
            onMomentumScrollEnd={this._onMomentumScrollEnd}
            height={150}
            removeClippedSubviews={true}
            showsPagination={false}
            showsButtons={false}>
            {expenseTrends}
          </Swiper>

          <Text style={styles.link}
                onPress={() => Linking.openURL('http://www.ramblemap.com/display_map?utf8=%E2%9C%93&country=' + country_id + '&region=world&commit=Submit')}>
            View Interactive Map
          </Text>
        </View>
        </Image>
      </ScrollView>
    );
  }
}

module.exports = Trends;
