'use strict';
var DropDown = require('./DropDown');
var TestComponent = require('./TestComponent');
var ListPicker = require('./ListPicker');
var FMPicker = require('./FMPicker');

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
  Component
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
    alignItems: 'center'
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
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'teal',
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
  searchInput: {
    height: 36,
    padding: 4,
    marginRight: 5,
    flex: 4,
    fontSize: 18,
    borderWidth: 1,
    borderColor: '#48BBEC',
    borderRadius: 8,
    color: '#48BBEC'
  },
  image: {
    width: 217,
    height: 138
  },
  countryPicker: {

  }
});

function urlForQuery(country) {
  var querystring = country;
  // return 'http://www.ramblemap.com/api/va' + querystring;
  return 'http://www.ramblemap.com/api/v1/countries';
}

class SearchPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchString: 'United States',
      isLoading: false,
      pickerShowing: false
    };
  }

  onSearchTextChanged(event) {
    this.setState({searchString: event.nativeEvent.text });
  }

  _executeQuery(query) {
    console.log(query);
    this.setState({isLoading: true});
  }

  onSearchPressed() {
    console.log('SEARCHING SHUD START');
    this.setState({pickerShowing: true});
    var query = urlForQuery(this.state.searchString);
    this._executeQuery(query);
  }

  render() {
    var spinner = this.state.isLoading ? (<ActivityIndicatorIOS size='large'/>) : (<View/>);
    var picker = this.state.pickerShowing ? (<FMPicker />) : (<View/>);
    return (
      <View style = {styles.container}>
        <Text style={styles.description}>
          Explore Currency Trends!
        </Text>
        <Text style={styles.description}>
          Seach by country.
        </Text>
        <TouchableHighlight style={styles.button}
            underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Base Country</Text>
        </TouchableHighlight>
        <View style={styles.flowRight}>
          <TextInput
            style={styles.searchInput}
            placeholder='Country DropDown Menu'/>
          <TouchableHighlight onPress={this.onSearchPressed.bind(this)} style={styles.button}
              underlayColor='#99d9f4'>
            <Text style={styles.buttonText}>Go</Text>
          </TouchableHighlight>
        </View>
        <Image source={require('./Resources/house.png')} style={styles.image}/>
        {spinner}
        {picker}
      </View>
    );
  }
}

module.exports = SearchPage;
