import React, {useState} from 'react';
import {View, Text, Button, SafeAreaView, StyleSheet, Image, useWindowDimensions} from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Logo from '../assets/ADD.png'
import CustomInput from './CustomInput';
import CustomBotton from './CustomButton';
import GooglePlacesInput from './GooglePlaces';
import {IP_ADDRESS} from '@env';

const SignIn = ({navigation}) => {
  const {height} = useWindowDimensions();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const onSignInPressed = async () =>{
    // console.log('here is the ip--->',IP_ADDRESS)
    console.log('in Login Being Pressed')
    const payload = {
      username: username,
      password: password
    }
    console.log('payload--->', payload)
    //check IP Address
    const response = await fetch(`http://${IP_ADDRESS}:8080/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload),
      })
      //.then(response => response.json())
      //.then(response=> console.log(response))
      //.catch(err => console.log('ERROR here--->',err))
    const body = await response.json();
    console.log('body in login-->', body)
    if (response.status !== 200) {
        throw Error(body.message) 
      }
    else if(body === 'false') return navigation.navigate('Sign Up');
    else return navigation.navigate('Home', {username: username});
        //console.log('response-->', response)
    //return navigation.navigate('Home');
  }

  return (
    <SafeAreaView style={styles.safe}> 
      <View style={styles.root}>
        <Image source={Logo} 
        style={[styles.logo, {height: height * 0.3}]} 
        resizeMode='contain' />
        <CustomInput placeholder='Username' value={username} setValue={setUsername}/>
        <CustomInput placeholder='Password' value={password} setValue={setPassword} secureTextEntry={true}/>
        <CustomBotton text={'Login'} onPress={onSignInPressed}/>
        {/* <GooglePlacesInput/> */}
        {/* <Button title='Go To Details'
          onPress={()=> navigation.navigate('Home')} /> */}
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
  logo :{
    //   width: 700,
    //   height: 700
      width: '70%',
      height: '70%',
      maxWidth: 500,
      maxHeight: 500,
  }
})
export default SignIn;