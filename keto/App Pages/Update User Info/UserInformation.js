'use strict'

var React = require('react-native');
var {
    StyleSheet,
    Text,
    TextInput,
    View,
    TouchableHighlight,
    ActivityIndicatorIOS,
    Image,
    Component
} = React;

var colors = {
    purple: '#B0378B',
    red: '#DE455A',
    yellow: '#B4DD45',
    green: '#5FC63E'
};

var activityLevels = [
    {value: 'Custom', label: 'Custom'},
    {value: 'Sedantary', label: 'Sedantary'},
    {value: 'Lightly Active', label: 'Lightly Active'},
    {value: 'Moderately Active', label: 'Moderately Active'},
    {value: 'Vigourously Active', label: 'Vigourously Active'},
    {value: 'Extremely Active', label:'Extremely Active'}
];

var styles = StyleSheet.create({

    container: {
        padding: 30,
        marginTop: 65,
        flex: 1,
        alignItems: 'center'
    },
    greeting: {
        color: colors.purple,
        flex: 1
    },
    weightLabel: {

    },
    textInput: {
        height: 36,
        flex: 2,
        padding: 4,
        marginRight: 5,
        fontSize: 18,
        borderWidth: 1,
        borderColor: colors.green,
        borderRadius: 8
    },
    flowRight: {
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch'
    }
});

class UserInformation extends Component{
    constructor(props){
        console.log('Macro constructor called');
        super(props);
        this.state = {
            isLoading: false,
            weight: '',
            bfPercent: '',
            activityLvl: ''
        };
    }
    render(){
        console.log('Macro rendering');
        return (
            <View style={styles.container}>
                <Text style={styles.description}>Tell us a little bit about yourself.</Text>
                <View style={styles.flowRight}>
                    <Text style={styles.weightLabel}>Weight: </Text>
                    <TextInput style={styles.textInput} value={this.state.weight}
                               onChange={this.onNameChange.bind(this)}
                               placeHolder='How much do you weigh? '/>
                    </View>
                    <View style={styles.flowRight}>
                    <Text style={styles.weightLabel}>Body Fat%: </Text>
                    <TextInput style={styles.textInput}
                               onChange={this.onbodyFatChange.bind(this)}
                               placeHolder='How much do you weigh? '/>
                </View>
                <View style={styles.flowRight}>
                    <Text style={styles.weightLabel}>Activity Level: </Text>
                    <TextInput style={styles.textInput} value={this.state.activityLvl}
                               onChange={this.onActivityLvlChange.bind(this)}
                               placeHolder='How much do you weigh? '/>
                </View>
            </View>
        );
    }
    onNameChange(event){

    }
    onbodyFatChange(event){

    }
    onActivityLvlChange(event){

    }
}


module.exports = UserInformation;
