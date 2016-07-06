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
  return 'http://localhost:3000/api/v1/expenses/' + querystring;
}

function urlForTrendsQuery(country) {
  var querystring = country;
  return 'http://localhost:3000/api/v1/trends/' + querystring;
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
      message: '',
      listOrder: ''
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
                    navigator: this.props.navigator,
                    listOrder: this.state.listOrder}
      });
    } else {
      this.setState({isLoading: false, message: 'Data for this location is not currently available, please try a differnt location.'});
    }
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

        <View style = {styles.container}>
        <Image source={require('./Resources/Title.png')} style={styles.title}/>
          <Text style={styles.description}>
            Explore relative expenses and currency trends. Choose your country:
          </Text>

          <FMPicker onUpdate={this.onUpdate.bind(this)}/>
          <Text style={styles.helperText}>
            See how far you money goes abroad vs at home:
          </Text>

          <Text style={styles.helperText}>
            See exchange rate yearly trends:
          </Text>
          <TouchableHighlight onPress={this.onTrendsPressed.bind(this)}
                              style={styles.button}
                              underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Exchange Rate Trends</Text>
          </TouchableHighlight>
          {spinner}
          <Image source={require('./Resources/glass.png')} style={styles.backgroundImage}/>
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
