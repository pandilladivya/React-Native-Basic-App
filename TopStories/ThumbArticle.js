import React from 'react';
import { StyleSheet, Image, Text, View } from 'react-native';

const ThumbArticle = ({ data}) => (
  <View style={styles.container}>
    <Image
      source={{uri: data.thumbnail}}
      style={styles.thumbnail}
    />
    <View style={styles.rightContainer}>
      <Text style={styles.title}>{data.title}</Text>
      <Text style={styles.content}>{data.content}</Text>
    </View>
  </View>
)

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  rightContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    marginBottom: 8,
    textAlign: 'left',
    paddingLeft:20,
  },
  content: {
    textAlign: 'left',
    paddingLeft:20,
  },
  thumbnail: {
    width: 53,
    height: 81,
    paddingLeft :20,
  },
  listView: {
    paddingTop: 20,
    backgroundColor: '#F5FCFF',
  },
});

export default ThumbArticle;
