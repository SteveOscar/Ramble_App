var React = require('react-native');
var {
  View,
  Text,
  Component
} = React;

var styles = React.StyleSheet.create({
  text: {
    color: 'black',
    backgroundColor: 'white',
    fontSize: 30,
    margin: 80
  },
  test: {
    flex: 1,
    fontSize: 30,
    margin: 50
  }
});

class TestComponent extends React.Component {
  render() {
    return (
      <Text style={styles.test}>Hello CARL</Text>
  )
  }
}

// render() {
//   return <React.Text style={styles.text}>Hello World (Again)</React.Text>;
// }

module.exports = TestComponent;
