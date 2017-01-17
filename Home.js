import Exponent from 'exponent';
import React, { Component } from 'react';
import {

  StyleSheet,
  Text,
    Navigator,
  View,
} from 'react-native';

import Tabs from 'react-native-tabs';
import Login from './Login';
import Recent from './Recent'
import Top from './TopStories'
import Post from './Post'
import Map from './Map'

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {page:'RECENT'};
  }
  navigate(routeName)
  {
    this.props.navigator.push({
      name:routeName
    })
  }

  renderScene(scene) {
    switch (scene) {
    case 'RECENT':
      return (<Recent/>)
      break;
    case 'TOP':
        return (<Top/>)
        break;
    case 'POST':
        return (<Post/>)
        break;
    case 'MAP':
        return (<Map/>)
        break;
    default:
      return (<Recent/>)
    }
  }


  render() {
    var self = this;
    return (
      <View style={styles.container}>
        <View style={{flex:1}}>
          {this.renderScene(this.state.page)}
        </View>
        <Tabs selected={this.state.page} style={{backgroundColor:'white'}}
              selectedStyle={{color:'red'}} onSelect={el=>this.setState({page:el.props.name})}>
            <Text name="RECENT" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Recent News</Text>
            <Text name="TOP" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Top Stories</Text>
            <Text name="POST" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Post</Text>
            <Text name="MAP" selectedIconStyle={{borderTopWidth:2,borderTopColor:'red'}}>Location</Text>
        </Tabs>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
