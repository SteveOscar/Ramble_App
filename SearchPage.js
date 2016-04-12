'use strict';
var DropDown = require('./DropDown');
var TestComponent = require('./TestComponent');
var FMPicker = require('./FMPicker');
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
  LinkingIOS
} = React;

var styles = StyleSheet.create({
  description: {
    marginBottom: 20,
    fontSize: 18,
    textAlign: 'center',
    color: '#656565'
  },
  container: {
    padding: 30,
    marginTop: 65,
    alignItems: 'center',
    justifyContent: 'center'
  },
  flowRight: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'stretch'
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
  // image: {
  //   width: 217,
  //   height: 160
  // },
  title: {
    marginBottom: 20,
    flex: 1
  }
});

function urlForQuery(country) {
  var querystring = country;
  // return 'http://www.ramblemap.com/api/va' + querystring;
  return 'http://www.ramblemap.com/api/v1/expenses/France';
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
      // .then(responseJson => this._handleResponse(responseJson))
      .catch(error =>
         this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
       }));
  }

  _handleResponse(response) {
    console.log(response);
    this.setState({isLoading: false, message: ''});
    if (response.application_response_code.substr(0, 1) === '1') {
      this.props.navigator.push({
        title: 'Results',
        component: Expenses,
        passProps: {expenses: response}
      })
    } else {
      this.setState({message: 'Location not recognized; please try again.'});
    }
  }

  onSearchPressed() {
    console.log('SEARCHING SHUD START');
    var query = urlForQuery(this.state.searchString);
    this._executeQuery(query);
  }

  render() {
    var spinner = this.state.isLoading ? (<ActivityIndicatorIOS size='large'/>) : (<View/>);
    return (

      <View style = {styles.container}>
      <Image source={require('./Resources/Title.png')} style={styles.title}/>
        <Text style={styles.description}>
          Explore Currency Trends
        </Text>
        <FMPicker />
          <TouchableHighlight onPress={this.onSearchPressed.bind(this)} style={styles.button}
              underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>

        <Image source={require('./Resources/glass.png')} style={styles.image}/>
        <Text style={styles.description}>
        LinkingIOS.openURL(url)
          Powered by RambleMap
        </Text>
        {spinner}
      </View>
    );
  }
}

module.exports = SearchPage;
