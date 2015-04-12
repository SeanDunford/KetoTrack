'use strict'

var React = require('react-native'); 
var SearchPage = require('./SearchPage'); 


var styles = React.StyleSheet.create({
  text: {
    color: 'blue', 
    backgroundColor: 'white', 
    fontSize: 30, 
    margin: 80
  }, 
  container: {
    flex: 1 
  }
});

class HelloWorld extends React.Component{
  render(){ 
    return <React.Text style={styles.text}>Hello World (Again) </React.Text>
  }
}

class PropertyFinder extends React.Component{
  render(){
    return( 
      <React.NavigatorIOS 
        style = {styles.container} 
    	initialRoute = {{
     	  title: 'Property Finder', 
          component: SearchPage 
        }}
     />)
  }
}


React.AppRegistry.registerComponent('keto', function(){return PropertyFinder});
