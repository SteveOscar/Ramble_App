var React = require('react-native');

var {
  View,
  Text,
  Component,
  ListView,
  StyleSheet
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
    },
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
      justifyContent: 'center',
      width: 300
    },
});

class Expense extends React.Component{

  render() {

    return (
      <View>
        <Text style={styles.welcome}>{this.props.expense[0]}: {this.props.expense[1]}</Text>
      </View>
    );
  }
}

module.exports = Expense;
