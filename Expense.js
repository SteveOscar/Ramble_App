var React = require('react-native');
var Trends = require('./Trends');

var {
  View,
  Text,
  Component,
  ListView,
  StyleSheet
} = React;

var styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
    buttonText: {
      fontSize: 18,
      color: 'white',
      alignSelf: 'center',
      fontWeight: 'bold'
    },
    button: {
      height: 36,
      flex: 1,
      flexDirection: 'row',
      backgroundColor: '#48BBEC',
      borderColor: '#48BBEC',
      borderWidth: 1,
      borderRadius: 8,
      marginBottom: 10,
      alignSelf: 'stretch',
      justifyContent: 'center',
      width: 300
    },
});

function urlForQuery(country) {
  var querystring = country;
  return 'http://www.ramblemap.com/api/v1/trends/' + querystring;
}

class Expense extends React.Component{

  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      message: ""
    };
  }


  _executeQuery(query) {
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
    this.setState({isLoading: false, message: ''});
    if (response !== undefined) {
      console.log('Navigator: ' + this.props.navigator)
      this.props.navigator.push({
        title: 'Trends',
        component: Trends,
        passProps: {trends: response}
      });
    } else {
      this.setState({message: 'Something bad happened'});
    }
  }

  onCountryPressed(country) {
    var query = urlForQuery(country);
    this._executeQuery(query);
  }

  render() {
    return (
      <View style={styles.button}>
        <Text onPress={this.onCountryPressed.bind(this, this.props.expense[0])}
              style={styles.buttonText}>{this.props.expense[0]}: {parseInt(this.props.expense[1] * 100)}%</Text>
      </View>
    );
  }
}

module.exports = Expense;
