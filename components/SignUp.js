import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView, StyleSheet, Image, useWindowDimensions} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../assets/ADD.png'
import CustomInput from './CustomInput';
import CustomBotton from './CustomButton';

const SignUp = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
//Needs to be changed for Create User
  const onSignUpPressed = async () =>{
    console.log('in SignUp Being Pressed')
    const payload = {
      username: username,
      password: password
    }
    console.log('payload--->', payload)
    const response = await fetch('http://192.168.1.5:8080/createUser', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      })
    const body = await response.json();
    console.log('body in login-->', body)
    if (response.status !== 200) {
        throw Error(body.message) 
    }
    else return navigation.navigate('Home', {username: username});
    
  }

  return (
    <SafeAreaView style={styles.safe}> 
      <View style={styles.root}>
        <Image source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode='contain' />
        <Text style={styles.text}>Sign Up</Text>
        <CustomInput placeholder='Username' value={username} setValue={setUsername}/>
        <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true}/>
        <CustomBotton text={'Sign Up'} onPress={onSignUpPressed}/>
      </View>
    </SafeAreaView> 
  )
};
const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: 'black'
  },
  root: {
      alignItems: 'center',
      padding: 20,
  },
  text:{
      color: 'red'
  },
  logo :{
    //   width: 700,
    //   height: 700
      width: '70%',
      height: '70%',
      maxWidth: 500,
      maxHeight: 500,
  }
})
export default SignUp;