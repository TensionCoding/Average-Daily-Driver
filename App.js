import { StatusBar } from 'expo-status-bar';
import { Component } from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView, View, Button } from 'react-native';
import TripDisplay from './components/TripDisplay';
import AddTrip from './components/AddTrip';
import CustomBotton from './components/CustomButton';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


export default class App extends Component {
  constructor (props){
    super(props);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleFormChange = this.handleFormChange.bind(this);
    this.handleFormSubmit = this.handleFormSubmit.bind(this);
  }
  state = {
    data: null,
    date: '',
    time: '',
    odo: '',
    start: ''
  };

  componentDidMount() {
    this.callBackendAPI()
        .then(res => {
          //console.log('res object--->', res)
          this.setState({ data: res })
          //console.log('current state--->', this.state)
      })
      .catch(err => console.log('Error in componentDidMount-->', err));
  };

  callBackendAPI = async () => {
    console.log('in call backend')
    const response = await fetch('http://192.168.1.5:8080/getTrips');
    const body = await response.json();
    if (response.status !== 200) {
      throw Error(body.message) 
    }
    //console.log('response-->', response)
    return body;
  };
  handleFormChange(event) {
    // this.setState({value: event.target.value});
    console.log(event)
    console.log('state of newEntry-->', this.state);
    const target = event.target;
    console.log('target-->', target);
    const value = target.value;
    console.log('value-->', value);
    const name = target.name;
    console.log('name-->', name)
    this.setState({
        [name]: value
    });
   console.log('after newEntry change--->', this.state)
  };

  handleFormSubmit(payload) {
    console.log('made it into here')
    // const newEntry = {
    //   date: this.state.date,
    //   time: this.state.odo,
    //   odo: this.state.odo,
    //   start: this.state.start
    // };
    console.log('in handleFormSubmit, here is newEntry-->', payload)
    fetch('http://192.168.1.5:8080/addTrip', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload),
    })
    .then(response => response.json())
    .then(res => this.setState({data : res}))
    .catch(err => console.log(`Error in Patch Request: ${err}`));
    //alert('A name was submitted: ');
    //event.preventDefault();
    this.setState({
      date: '',
      time: '',
      odo: '',
      start: '',
    });
  };

  handleDelete(event){
    //event.preventDefault();
    console.log('Delete button pushed');
    console.log('Trip Id', event);
    const objID = event;
    fetch(`http://192.168.1.5:8080/deleteTrip/${objID}`, 
    {method: 'DELETE'})
    .then(res => res.json())
    .then(res => {
      console.log('Delete succesfull');
      this.setState({ data: res });
      console.log('new state after delete',this.state)
    })
    .catch(err => console.log('Error:',err))

  }

  render(){
    let testDiv = <Text>Hello</Text>;
    if(this.state.data !== null){
      //console.log('trips? inside of conditional', this.state.data) //this.state.data[0].trips    testDiv = this.state.data[0].trips.map
      testDiv = this.state.data.map((element, index) =>{
        return <TripDisplay key={`trip ${index}`} date={element.date} time={element.time} odo={element.odo} start={element.start} _id={element._id} handleDelete={this.handleDelete}/>
      });
    }
    const onSignInPressed = () => {
      console.log('sign in')
    }
  return (
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
        {/* <CustomBotton text={"add trip"} onPress={onSignInPressed}/> */}
        {/* <Button onPress={() => this.handleFormSubmit()} value={'Sam'} title={'Add Trip'}/> */}

        {/* <StatusBar style="auto" /> */}
        {testDiv}
      </ScrollView>
     </SafeAreaView>
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

