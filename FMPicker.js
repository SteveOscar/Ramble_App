"use strict";

var React = require('react-native');
var {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
} = React;

var FMPicker = require('react-native-fm-picker');

var options = ['USA', 'France', 'Australia', 'Japan', 'China'];
var options2 = ['1', '2', '3'];

var TheFMPicker = React.createClass({
    getInitialState: function(){
        return {
            countryBtnLabel: 'Select Country',
            selectedCountry: 'USA',
            selectedRange: '1'
        };
    },
    render: function() {
        return (
            <View style={styles.container}>
                <Text>Country: {this.state.selectedCountry}</Text>
                <Text>Time Span: {this.state.selectedRange} Year</Text>

                <TouchableHighlight style={styles.button}
                    underlayColor='#99d9f4'
                    onPress={()=>{
                        this.refs.picker.show();
                    }}>
                  <Text style={styles.buttonText}>{this.state.countryBtnLabel}</Text>
                </TouchableHighlight>

                <TouchableHighlight style={styles.button}
                    underlayColor='#99d9f4'
                    onPress={()=>{
                        this.refs.picker2.show();
                    }}>
                  <Text style={styles.buttonText}>Time Span</Text>
                </TouchableHighlight>


                <FMPicker ref={'picker'} options={options}
                    onSubmit={(option)=>{
                        this.setState({selectedCountry: option, countryBtnLabel: option})
                    }}
                    />
                <FMPicker ref={'picker2'} options={options2}
                    onSubmit={(option)=>{
                        this.setState({selectedRange: option})
                    }}
                    />
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
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

module.exports = TheFMPicker;
