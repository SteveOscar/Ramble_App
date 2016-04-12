'use strict';
var TestComponent = require('./TestComponent');
var FMPicker = require('./FMPicker');
var Expenses = require('./Expenses');
var ResponsiveImage = require('react-native-responsive-image');

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
  Linking
} = React;

var styles = StyleSheet.create({
  description: {
    marginBottom: 10,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  link: {
    fontSize: 18,
    textAlign: 'center',
    color: 'blue'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    flexDirection: 'row',
    backgroundColor: 'teal',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    justifyContent: 'center',
    width: 80
  },
  title: {
    marginBottom: 20,
    flex: 1
  }
});

function urlForQuery(country) {
  var querystring = country;
  return 'http://www.ramblemap.com/api/v1/expenses/' + querystring;
  // return 'http://www.ramblemap.com/api/v1/expenses/France';
}

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'United States',
      isLoading: false,
    };
  }

  onSearchTextChanged(event) {
    this.setState({searchString: event.nativeEvent.text });
  }

  _executeQuery(query) {
    console.log('Query: ' + query);
    this.setState({isLoading: true});
    fetch(query)
      .then(response => response.json())
      .then((response) => {
        this._handleResponse(response);
      })
      .catch(error =>
         this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
       }));
  }

  _handleResponse(response) {
    // console.log(response != undefined);
    this.setState({isLoading: false, message: ''});
    if (response !== undefined) {
      this.props.navigator.push({
        title: 'Results',
        component: Expenses,
        passProps: {expenses: response}
      })
    } else {
      this.setState({message: 'Location not recognized; please try again.'});
    }
  }

  onExpensesPressed() {
    var query = urlForQuery(this.state.searchString);
    this._executeQuery(query);
  }

  onUpdate(country){
    this.setState({ searchString: country });
    var query = urlForQuery(this.state.searchString);
  }

  render() {
    var spinner = this.state.isLoading ? (<ActivityIndicatorIOS size='large'/>) : (<View/>);
    return (
      <View style = {styles.container}>
      <Image source={require('./Resources/Title.png')} style={styles.title}/>
        <Text style={styles.description}>
          Explore Currency Trends
        </Text>
        {spinner}
        <FMPicker onUpdate={this.onUpdate.bind(this)}/>
          <TouchableHighlight style={styles.button}
              underlayColor='#99d9f4'>
            <Text onPress={this.onExpensesPressed.bind(this)} style={styles.buttonText}>Expenses</Text>
          </TouchableHighlight>

        <Image source={require('./Resources/glass.png')} style={styles.image}/>
        <Text style={styles.description}>Powered By </Text>
        <Text style={styles.link}
              onPress={() => Linking.openURL('http://www.ramblemap.com')}>
          RambleMap
        </Text>
      </View>
    );
  }
}

module.exports = SearchPage;
