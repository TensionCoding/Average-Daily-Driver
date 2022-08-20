import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
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

export default class App extends Component {
  constructor (props){
    super(props);
  }
  render(){
    function HomeScreen ({navigation}) {
      return (
        <View>
          <Text>Home Screen</Text>
          <Button title='Go To Details'
          onPress={()=> navigation.navigate('Details')} />
        </View>
      )
    }
    function DetailScreen () {
      return (
        <View>
          <Text>Detail Screen</Text>
        </View>
      )
    }
    const Stack = createNativeStackNavigator();
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
}

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
    marginHorizontal:20,
  },
  text: {
    fontSize: 25,
  }
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