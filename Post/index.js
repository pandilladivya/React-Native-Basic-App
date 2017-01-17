import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
} from 'react-native';

class Post extends Component {
  constructor(props) {
    super(props);
    this.state = {
                  text:''

                };
    this.onButtonPressed = this.onButtonPressed.bind(this);
  }
  onButtonPressed() {
    alert("Posted");
 }

    render() {

      return (
        <View style={styles.container}>

          <TextInput
            style={styles.input}
            multiline = {true}
            placeholder="         Type here to Post!"
            onChangeText={(text) => this.setState({text})}
          />



        <Button
          onPress={this.onButtonPressed.bind(this)}
          title="POST"
          color="steelblue"

        />

        </View>
      );
    }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    padding: 10,
    paddingTop: 80
  },
  input: {
    height: 250,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    alignSelf: 'stretch',

  },
  button: {
    height: 50,
    backgroundColor: '#48BBEC',
    alignSelf: 'stretch',
    marginTop: 10,
    padding:20,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },

});

export default Post;
