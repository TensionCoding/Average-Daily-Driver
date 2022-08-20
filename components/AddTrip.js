import React, { Component } from "react";
import { StyleSheet, Text, View, Button, TextInput, SafeAreaView } from 'react-native';

const AddTrip = ({handleFormSubmit, onPress}) => {
  const [date, onChangeDate] = React.useState("");
  const [time, onChangeTime] = React.useState("");
  const [odo, onChangeOdo] = React.useState("");
  const [start, onChangeStart] = React.useState("");
  //console.log('props-->', props)
//   const payload = {
//     date: date,
//     time: time,
//     odo: odo,
//     start: start
//   };
  
//   constructor(props) {
//     super(props);
//     //this.handleChange = this.handleChange.bind(this);
//     // state = {
//     //   date: '',
//     //   time: '',
//     //   odo: '',
//     //   start: ''
//     // }
//   }

//   handleChange(event) {
//     //console.log('handleChange in MainContainer', event.target.value);
//     this.props.handleFormChange(event)
//   }
  //function handleSubmit (payload) {
    //console.log('submit button pushed in Main Container', event)
    //this.props.handleFormSubmit(payload);
  //}

//   render() {
//     const {date, time, odo, start} = this.props;
//     console.log()
//     const [text, onChangeText] = React.useState("Useless Text");

    return (
      <SafeAreaView style={styles.container}>
        <TextInput
          style={styles.input} 
          placeholder="Enter The Date"
          onChangeText={onChangeDate}
          value={date}
        />
        <TextInput 
          style={styles.input}
          placeholder="Enter The Time" 
          onChangeText={onChangeTime}
          value={time} 
        />
        <TextInput
          style={styles.input}
          placeholder="Enter The Odometer" 
          onChangeText={onChangeOdo}
          value={odo}
        />
        <TextInput
          style={styles.input} 
          placeholder="Enter The Start Location" 
          onChangeText={onChangeStart}
          value={start} 
        />
        <Button 
        style={styles.button}
        onPress={() => {
          const payload = {
            date: date,
            time: time,
            odo: odo,
            start: start
          };
          console.log('payload',payload)
          handleFormSubmit(payload)
        }} 
        title={'ADD TRIP'}>
        </Button>
      </SafeAreaView>
    //   <form onSubmit={this.handleSubmit}>
    //     <label>
    //       Date:
    //       <input name='date' type="text" value={date} onChange={this.handleChange} />
    //     </label>
    //     <br />
    //     <label>
    //       Time:
    //       <input name='time' type="text" value={time} onChange={this.handleChange} />
    //     </label>
    //     <br />
    //     <label>
    //       Odometer:
    //       <input name='odo' type="text" value={odo} onChange={this.handleChange} />
    //     </label>
    //     <br />
    //     <label>
    //       Start:
    //       <input name='start' type="text" value={start} onChange={this.handleChange} />
    //     </label>
    //     {/* <input type="submit" value="Submit" /> */}
    //   </form>
    );
  }
//}
const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingHorizontal: 10,

  },
  button:{
    paddingHorizontal: 10,
  },
    input: {
      backgroundColor: 'white',
      color: 'blue',
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
    },
  });
export default AddTrip;