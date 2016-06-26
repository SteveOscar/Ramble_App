"use strict";

var React = require('react-native');
var {
    TouchableHighlight,
    StyleSheet,
    Text,
    View,
} = React;

var FMPicker = require('react-native-fm-picker');

var options = ["Afghanistan", "Albania", "Algeria", "Angola", "Argentina", "Armenia", "Australia", "Austria", "Azerbaijan", "Bahamas", "Bangladesh", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia", "Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Congo", "Costa Rica", "Croatia", "Cuba", "Cyprus", "Czech Republic", "Côte d'Ivoire", "Democratic Republic of Congo", "Denmark", "Djibouti", "Dominican Republic", "Ecuador", "Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Ethiopia", "Falkland Islands", "Fiji", "Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau", "Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon", "Lesotho", "Liberia", "Libya", "Lithuania", "Luxembourg", "Macedonia", "Madagascar", "Malawi", "Malaysia", "Mali", "Mauritania", "Mexico", "Moldova", "Mongolia", "Montenegro", "Morocco", "Mozambique", "Myanmar", "Namibia", "Nepal", "Netherlands[L]", "New Caledonia", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea", "Norway", "Oman", "Pakistan", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru", "Philippines", "Poland", "Portugal", "Puerto Rico", "Qatar", "Romania", "Russia", "Rwanda", "Saudi Arabia", "Senegal", "Serbia", "Sierra Leone", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "Somaliland", "South Africa", "South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Swaziland", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan", "Tanzania", "Thailand", "Togo", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Uganda", "Ukraine", "United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Venezuela", "Vietnam", "West Sahara", "Yemen", "Zambia", "Zimbabwe"];
//
// var options2 = ['1', '2', '3'];

var TheFMPicker = React.createClass({
    getInitialState: function(){
        return {
            countryBtnLabel: 'Select Your Country',
            selectedCountry: 'USA',
            selectedRange: '1'
        };
    },

    update: function()
    {
        var theVal = this.state.selectedCountry;
        this.props.onUpdate(theVal);
    },

    render: function() {
        return (
            <View style={styles.container}>
                {/*<Text>Country: {this.state.selectedCountry}</Text>
                <Text>Time Span: {this.state.selectedRange} Year</Text>*/}

                <TouchableHighlight style={styles.button}
                    underlayColor='red'
                    onPress={()=>{
                        this.refs.picker.show();
                    }}>
                  <Text style={styles.buttonText}>{this.state.countryBtnLabel}</Text>
                </TouchableHighlight>

                {/*<TouchableHighlight style={styles.button}
                    underlayColor='#99d9f4'
                    onPress={()=>{
                        this.refs.picker2.show();
                    }}>
                  <Text style={styles.buttonText}>Time Span</Text>
                </TouchableHighlight>*/}


                <FMPicker ref={'picker'} options={options}
                    onSubmit={(option)=>{
                        this.setState({selectedCountry: option, countryBtnLabel: option});
                        this.update();
                    }}
                    />
                {/*<FMPicker ref={'picker2'} options={options2}
                    onSubmit={(option)=>{
                        this.setState({selectedRange: option})
                    }}
                    />*/}
            </View>
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        marginBottom: 12
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
      backgroundColor: '#48BBEC',
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
