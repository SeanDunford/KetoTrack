'use strict';

var React = require('react-native');
var UserInformation = require('./App Pages/Update User Info/UserInformation');

var {
    StyleSheet,
    Component,
    AppRegistry
} = React;

var styles = StyleSheet.create({
    container: {
        flex: 1
    }
});

class keto extends Component{
    render() {
        console.log('Keto rendering');
        return (
            <React.NavigatorIOS
                style={styles.container}
                initialRoute = {
                    {
                        title: 'Let\'s get to know you',
                        component: UserInformation
                    }
                }
            />
        );
    }
};


AppRegistry.registerComponent('keto', () => keto);
