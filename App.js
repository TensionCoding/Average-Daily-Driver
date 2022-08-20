import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Button } from 'react-native';
import TripDisplay from './components/TripDisplay';
import AddTrip from './components/AddTrip';
import CustomBotton from './components/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './components/Home';
import SignIn from './components/SignIn';
import SignUp from './components/SignUp';
import GooglePlacesInput from './components/GooglePlaces';

const Stack = createNativeStackNavigator();

export default function App () {
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Sign In'>
          <Stack.Screen name='Sign In' component={SignIn}/>
          <Stack.Screen name='Sign Up' component={SignUp}/>
          <Stack.Screen name='Home' component={Home}/>
          <Stack.Screen name='Google' component={GooglePlacesInput} />
        </Stack.Navigator>
      </NavigationContainer>
    );
}
// export default class App extends Component {
//   constructor(props) {
//     super(props);
//   }
//   render() {
//     const Stack = createNativeStackNavigator();
//     return (
//       <NavigationContainer>
//         <Stack.Navigator initialRouteName='Sign In'>
//           <Stack.Screen name='Sign In' component={SignIn}/>
//           <Stack.Screen name='Sign Up' component={SignUp}/>
//           <Stack.Screen name='Home' component={Home}/>
//           <Stack.Screen name='Google' component={GooglePlacesInput} />
//         </Stack.Navigator>
//       </NavigationContainer>
//     );
//   }
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    // paddingTop: '30px',
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  scrollView: {
    backgroundColor: 'lightblue',
    marginHorizontal: 20,
  },
  text: {
    fontSize: 25,
  },
});

/*
     <SafeAreaView style={styles.container}>
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text}>Add Trip</Text>
        <AddTrip
        date={this.state.date}
        time={this.state.time}
        odo={this.state.odo}
        start={this.state.start}
        handleFormChange={this.handleFormChange}
        handleFormSubmit={this.handleFormSubmit}
        onPress={onSignInPressed} />
        {/* <CustomBotton text={"add trip"} onPress={onSignInPressed}/> *///}
        {/* <Button onPress={() => this.handleFormSubmit()} value={'Sam'} title={'Add Trip'}/> */}

        {/* <StatusBar style="auto" /> */}
        /*
        {testDiv}
      </ScrollView>
     </SafeAreaView>
*/