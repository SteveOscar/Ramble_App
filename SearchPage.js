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
  ScrollView,
  Linking,
} = React;

const styles = require('./Styles');

function urlForExpensesQuery(country) {
  var querystring = country;
  return 'http://www.ramblemap.com/api/v1/expenses/' + querystring;
}

function urlForTrendsQuery(country) {
  var querystring = country;
  return 'http://www.ramblemap.com/api/v1/trends/' + querystring;
}

function getTitle(Component) {
  if(Component === Trends) {
    return 'Currency Trends';
  } else {
    return 'Currency Value';
  }
}

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'United States',
      isLoading: false,
      message: ''
    };
  }

  onSearchTextChanged(event) {
    this.setState({searchString: event.nativeEvent.text });
  }

  _executeQuery(query, component) {
    this.setState({isLoading: true});
    fetch(query, {headers: {'token': 'ftxdIh8/uHhW3wjRI2RTlXS1Nwg2Spdw07qHAbi5QVk'}})
      .then(response => response.json())
      .then((response) => {
        this._handleResponse(response, component);
      })
      .catch(error =>
         this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
       }));
  }

  _handleResponse(response, component) {
    if (response !== undefined) {
      this.setState({isLoading: false});
      this.props.navigator.push({
        title: getTitle(component),
        component:  component,
        passProps: {expenses: response,
                    trends: response,
                    country: this.state.searchString,
                    navigator: this.props.navigator}
      });
    } else {
      this.setState({isLoading: false, message: 'Data for this location is not currently available, please try a differnt location.'});
    }
  }

  onExpensesPressed() {
    var query = urlForExpensesQuery(this.state.searchString);
    this._executeQuery(query, Expenses);
  }

  onTrendsPressed() {
    var query = urlForTrendsQuery(this.state.searchString);
    this._executeQuery(query, Trends);
  }

  onUpdate(country){
    this.setState({ searchString: country });
    var query = urlForTrendsQuery(this.state.searchString);
  }

  render() {
    var spinner = this.state.isLoading ? (<ActivityIndicatorIOS size='large' color='black' style = {styles.spinner}/>) : (<View/>);
    return (
      <ScrollView>
      {spinner}
        <View style = {styles.container}>
        <Image source={require('./Resources/Title.png')} style={styles.title}/>
          <Text style={styles.description}>
            Explore relative expenses and currency trends. Choose your country:
          </Text>

          <FMPicker onUpdate={this.onUpdate.bind(this)}/>
          <Text style={styles.helperText}>
            Choose which dataset to view:
          </Text>
          <TouchableHighlight onPress={this.onExpensesPressed.bind(this)}
                              style={styles.button}
                              underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Relative Currency Power</Text>
          </TouchableHighlight>

          <TouchableHighlight onPress={this.onTrendsPressed.bind(this)}
                              style={styles.button}
                              underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Exchange Rate Trends</Text>
          </TouchableHighlight>
          <Image source={require('./Resources/glass.png')} style={styles.image}/>
          <Text style={styles.description}>Powered By </Text>
          <Text style={styles.link}
                onPress={() => Linking.openURL('http://www.ramblemap.com')}>
            RambleMap
          </Text>
        </View>
      </ScrollView>
    );
  }
}

module.exports = SearchPage;
