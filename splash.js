import React, { Component } from 'react';
import { Text,View,StyleSheet } from 'react-native';
export default class Splash extends Component
{
  render()
  {
    return(
      <Text style={styles.container}> </Text>
    );
  }
}
var styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'steelblue',
  }
});
