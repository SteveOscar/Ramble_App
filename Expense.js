var React = require('react-native');

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

class Expense extends React.Component{

  render() {

    return (
      <View style={styles.button}>
        <Text style={styles.buttonText}>{this.props.expense[0]}: {parseInt(this.props.expense[1] * 100)}%</Text>
      </View>
    );
  }
}

module.exports = Expense;
