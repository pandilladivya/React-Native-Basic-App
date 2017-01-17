'use strict';
import React, { Component } from 'react';
import Exponent from 'exponent';
import Login from './Login';
import SignIn from './SignIn';
import Home from './Home';
import Splash from './SideMenu';
import {
  StyleSheet,
  Navigator,
} from 'react-native';




class App extends Component {

  renderScene(route,navigator)
  {

    if(route.name=='Login')
    {
      return (<Login navigator={navigator}/>);
    }
    if(route.name=='SignIn')
    {
      return (<SignIn navigator={navigator} />);
    }
    if(route.name=='Home')
    {
      return (<Home navigator={navigator} />);
    }
    if(route.name=='Post')
    {
      return (<Login navigator={navigator} />);
    }
    if(route.name=='Splash')
    {
      return (<Splash navigator={navigator} />);
    }
  }

  render() {


    return (
      <Navigator
          initialRoute={{name:'Splash'}}
           renderScene={this.renderScene.bind(this)}

         />

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
Exponent.registerRootComponent(App);
