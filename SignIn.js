import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '',
                  mail:'',
                  pwd:'',
                  cnf:'',
                errors:[],};
  }
  OnLoginPressed() {
   if(this.state.fname=='')
   {
      alert('Enter First Name');
   }
   if(this.state.mail=='')
   {
      alert('Enter Mail');
   }
   if(this.state.pwd!=this.state.cnf)
   {
      alert('Enter valid password');
   }
 }

 navigate(routeName) {
  this.props.navigator.push({
    name:routeName
  })
}
    render() {

      return (
        <View style={styles.container}>
          <TextInput style={styles.input}
            placeholder="Enter First Name"
            onChangeText={(fname) => this.setState({fname})}
          />
          <TextInput style={styles.input}
            placeholder="Enter Mail"
            onChangeText={(mail) => this.setState({mail})}
          />
          <TextInput style={styles.input}
            placeholder="Enter Password"
            onChangeText={(pwd) => this.setState({pwd})}
            secureTextEntry={true}
          />
          <TextInput style={styles.input}
            placeholder="Confirm Password"
            onChangeText={(cnf) => this.setState({cnf})}
            secureTextEntry={true}
          />

        <TouchableHighlight style={styles.button} onPress={this.OnLoginPressed.bind(this)}>
          <Text style={styles.buttonText}>SIGN IN</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.navigate.bind(this,'Login')}>
          <Text>Already a Registered User. Click here to Login</Text>
        </TouchableHighlight>


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
    height: 50,
    marginTop: 10,
    padding: 4,
    fontSize: 18,
    alignSelf: 'stretch',

  },
  button: {
    height: 50,
    backgroundColor: 'steelblue',
    alignSelf: 'stretch',
    marginTop: 10,
    justifyContent: 'center'
  },
  buttonText: {
    fontSize: 22,
    color: '#FFF',
    alignSelf: 'center'
  },

});

export default SignIn;
