var React = require('react-native');
var Trends = require('./Trends');

var {
  View,
  Text,
  Component,
  ActivityIndicatorIOS,
  ListView,
  StyleSheet
} = React;

const styles = require('./ResultsStyles');

function urlForQuery(country) {
  var querystring = country;
  return 'http://www.ramblemap.com/api/v1/trends/' + querystring;
}

class Expense extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: ''
    };
  }


  _executeQuery(query, country) {
    this.setState({isLoading: true});
    fetch(query)
      .then(response => response.json())
      .then((response) => {
        this._handleResponse(response, country);
      })
      .catch(error =>
         this.setState({
          isLoading: false,
          message: 'Something bad happened ' + error
       }));
  }

  _handleResponse(response, country) {
    this.setState({isLoading: false});
    if (response !== undefined) {
      console.log('Navigator: ' + this.props.navigator);
      this.props.navigator.push({
        title: 'Trends',
        component: Trends,
        passProps: {trends: response, country: country}
      });
    } else {
      this.setState({message: 'Something bad happened'});
    }
  }

  onCountryPressed(country) {
    console.log('COUNTRY: ' + country);
    var query = urlForQuery(country);
    this._executeQuery(query, country);
  }

  render() {
    var spinner = this.state.isLoading ? (<ActivityIndicatorIOS size='large' style = {styles.spinner}/>) : (<View/>);
    return (
      <View style={styles.button}>
        {spinner}
        <Text onPress={this.onCountryPressed.bind(this, this.props.expense[0])}
              style={styles.buttonText}>{this.props.expense[0]}: {parseInt(this.props.expense[1] * 100)}%</Text>
      </View>
    );
  }
}

module.exports = Expense;
