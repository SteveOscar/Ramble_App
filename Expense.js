var React = require('react-native');
var Trends = require('./Trends');

var {
  View,
  Text,
  Component,
  ActivityIndicatorIOS,
  ListView,
  StyleSheet,
  TouchableHighlight
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
      message: ''
    };
  }


  _executeQuery(query, country) {
    fetch(query, {headers: {'token': 'ftxdIh8/uHhW3wjRI2RTlXS1Nwg2Spdw07qHAbi5QVk'}})
      .then(response => response.json())
      .then((response) => {
        this._handleResponse(response, country);
      })
      .catch(error =>
         this.setState({
          message: 'Something bad happened ' + error
       })
     );
  }

  _handleResponse(response, country) {
    if (response !== undefined) {
      console.log('Navigator: ' + this.props.navigator);
      this.props.showSpinner();
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
    this.props.showSpinner();
    this._executeQuery(query, country);
  }

  render() {
    return (
      <TouchableHighlight onPress={this.onCountryPressed.bind(this, this.props.expense[0])}
                          style={styles.button}>
        <Text style={styles.buttonText}>
          {this.props.expense[0]}: {parseInt(this.props.expense[1] * 100)}%
        </Text>
      </TouchableHighlight>
    );
  }
}

module.exports = Expense;
