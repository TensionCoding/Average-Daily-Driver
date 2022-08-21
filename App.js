import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import GooglePlacesInput from './components/GooglePlaces';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Sign In">
        <Stack.Screen name="Sign In" component={SignIn} />
        <Stack.Screen name="Sign Up" component={SignUp} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Google" component={GooglePlacesInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
